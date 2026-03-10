(function () {
  "use strict";

  const state = {
    currentIndex: 0,
    answers: {},
    results: {},
    revealed: {},
    highlights: {},
    timerSeconds: 0,
    timerInterval: null,
    timerVisible: true,
    mode: "inference",
  };

  const LETTERS = ["A", "B", "C", "D"];

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const startScreen = $("#start-screen");
  const quizScreen = $("#quiz-screen");
  const resultsScreen = $("#results-screen");

  const startBtn = $("#start-btn");
  const nextBtn = $("#next-btn");
  const backBtn = $("#back-btn");
  const restartBtn = $("#restart-btn");
  const homeBtn = $("#home-btn");
  const resultsHomeBtn = $("#results-home-btn");

  const passageText = $("#passage-text");
  const questionStem = $("#question-stem");
  const choicesContainer = $("#choices-container");
  const questionBadge = $("#question-number-badge");
  const questionCounter = $("#question-counter");
  const progressFill = $("#progress-fill");
  const timerDisplay = $("#timer-display");

  const feedbackPanel = $("#feedback-panel");
  const feedbackHeader = $("#feedback-header");
  const feedbackIcon = $("#feedback-icon");
  const feedbackTitle = $("#feedback-title");
  const feedbackAnswers = $("#feedback-answers");
  const explanationText = $("#explanation-text");

  const navigatorOverlay = $("#navigator-overlay");
  const navigatorGrid = $("#navigator-grid");
  const questionNavBtn = $("#question-nav-btn");
  const navigatorClose = $("#navigator-close");
  const toggleTimerBtn = $("#toggle-timer-btn");
  const hideTimerBtn = $("#hide-timer-btn");
  const highlightToolbar = $("#highlight-toolbar");
  const hlBtn = $("#hl-btn");

  const totalQCount = $("#total-q-count");
  const typeLabel = $("#type-label");
  const startDescription = $("#start-description");
  const graphImageSection = $("#graph-image-section");
  const graphImage = $("#graph-image");
  const modeCards = $$(".mode-card");

  function getActiveQuestions() {
    if (state.mode === "graph" && typeof graphQuestions !== "undefined") {
      return graphQuestions;
    }
    if (state.mode === "math" && typeof mathQuestions !== "undefined") {
      return mathQuestions;
    }
    if (state.mode === "mathIntensive" && typeof mathIntensiveQuestions !== "undefined") {
      return mathIntensiveQuestions;
    }
    return questions;
  }

  function renderMath() {
    if (state.mode !== "math" && state.mode !== "mathIntensive") return;
    if (typeof renderMathInElement !== "function") return;
    var opts = {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    };
    var quizMain = $(".quiz-main");
    if (quizMain && !quizMain.closest(".hidden")) renderMathInElement(quizMain, opts);
    var resultsContainer = $(".results-container");
    if (resultsContainer && !resultsContainer.closest(".hidden"))
      renderMathInElement(resultsContainer, opts);
  }

  function init() {
    totalQCount.textContent = questions.length;
    bindEvents();
  }

  function bindEvents() {
    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", handleNext);
    backBtn.addEventListener("click", handleBack);
    restartBtn.addEventListener("click", restartQuiz);
    if (homeBtn) homeBtn.addEventListener("click", confirmGoHome);
    if (resultsHomeBtn) resultsHomeBtn.addEventListener("click", goHome);
    questionNavBtn.addEventListener("click", openNavigator);
    navigatorClose.addEventListener("click", closeNavigator);
    navigatorOverlay.addEventListener("click", (e) => {
      if (e.target === navigatorOverlay) closeNavigator();
    });
    hideTimerBtn.addEventListener("click", toggleTimer);
    toggleTimerBtn.addEventListener("click", toggleTimer);

    modeCards.forEach((card) => {
      card.addEventListener("click", () => {
        modeCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        const mode = card.dataset.mode;
        state.mode = mode;
        const qs = getActiveQuestions();
        totalQCount.textContent = qs.length;
        if (mode === "graph") {
          typeLabel.innerHTML = "Quantitative Evidence";
          startDescription.textContent =
            "Practice quantitative evidence questions from real Digital SAT papers. " +
            "Each question includes a data table or graph that you must interpret to select the best answer.";
        } else if (mode === "math") {
          typeLabel.innerHTML = "Math";
          startDescription.textContent =
            "Practice math questions from real Digital SAT papers covering algebra, geometry, " +
            "data analysis, and advanced math. Includes circles, parabolas, exponents, triangles, and more.";
        } else if (mode === "mathIntensive") {
          typeLabel.innerHTML = "Math Intensive";
          startDescription.textContent =
            "The hardest math questions — equivalent to Module 2 Q20-22 difficulty. " +
            "Covers advanced topics: trigonometry, complex numbers, nonlinear systems, sequences, " +
            "and multi-step problem solving. For 750+ scorers.";
        } else {
          typeLabel.innerHTML = "Inference &amp; Text Completion";
          startDescription.textContent =
            "Practice inference questions from real Digital SAT Reading and Writing papers. " +
            "Each question presents a short passage followed by a question that requires you to draw " +
            "a logical conclusion or select the most appropriate completion.";
        }
      });
    });

    $$(".review-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".review-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        renderReviewList(tab.dataset.filter);
      });
    });

    document.addEventListener("keydown", handleKeyboard);

    passageText.addEventListener("mouseup", handlePassageSelection);
    passageText.addEventListener("touchend", function () {
      setTimeout(handlePassageSelection, 50);
    });
    hlBtn.addEventListener("click", applyHighlight);
    document.addEventListener("mousedown", function (e) {
      if (!highlightToolbar.contains(e.target)) {
        highlightToolbar.classList.add("hidden");
      }
    });
    passageText.addEventListener("click", handleHighlightRemove);
  }

  function handleKeyboard(e) {
    if (quizScreen.classList.contains("hidden")) return;
    if (navigatorOverlay && !navigatorOverlay.classList.contains("hidden")) {
      if (e.key === "Escape") closeNavigator();
      return;
    }

    const qs = getActiveQuestions();
    const q = qs[state.currentIndex];
    const revealed = state.revealed[q.id];

    if (!revealed) {
      const keyMap = { a: 0, b: 1, c: 2, d: 3 };
      const idx = keyMap[e.key.toLowerCase()];
      if (idx !== undefined && idx < q.choices.length) {
        selectChoice(idx);
      }
    }

    if (e.key === "Enter" || e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handleBack();
    }
  }

  function onBeforeUnload(e) {
    e.preventDefault();
    e.returnValue = "";
  }

  function startQuiz() {
    state.currentIndex = 0;
    state.answers = {};
    state.results = {};
    state.revealed = {};
    state.highlights = {};
    state.timerSeconds = 0;

    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      state.timerSeconds++;
      updateTimerDisplay();
    }, 1000);

    window.addEventListener("beforeunload", onBeforeUnload);

    var sectionLabel = $(".section-label");
    if (sectionLabel) {
      sectionLabel.textContent =
        state.mode === "math" || state.mode === "mathIntensive"
          ? "Section 2, Module 2: Math"
          : "Section 1, Module 1: Reading and Writing";
    }

    startScreen.classList.add("hidden");
    resultsScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    renderQuestion();
  }

  function renderQuestion() {
    const qs = getActiveQuestions();
    const q = qs[state.currentIndex];
    const total = qs.length;
    const revealed = state.revealed[q.id];

    questionBadge.textContent = state.currentIndex + 1;
    questionCounter.textContent = `Question ${state.currentIndex + 1} of ${total}`;
    progressFill.style.width = `${((state.currentIndex + 1) / total) * 100}%`;

    const isMath = state.mode === "math" || state.mode === "mathIntensive";
    const passageSection = $(".passage-section");
    const sectionDivider = $(".section-divider");

    if (isMath) {
      passageSection.classList.add("hidden");
      sectionDivider.classList.add("hidden");
      graphImageSection.classList.add("hidden");
      graphImage.src = "";
      if (q.passage && q.passage !== q.question) {
        questionStem.innerHTML = q.passage + q.question;
      } else {
        questionStem.innerHTML = q.question;
      }
    } else {
      passageSection.classList.remove("hidden");
      sectionDivider.classList.remove("hidden");
      if (q.imageUrl) {
        graphImageSection.classList.remove("hidden");
        graphImage.src = q.imageUrl;
      } else {
        graphImageSection.classList.add("hidden");
        graphImage.src = "";
      }
      if (state.highlights[q.id]) {
        passageText.innerHTML = state.highlights[q.id];
      } else {
        passageText.innerHTML = q.passage;
      }
      questionStem.innerHTML = q.question;
    }

    choicesContainer.innerHTML = "";
    q.choices.forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", "false");

      if (state.answers[q.id] === i) {
        btn.classList.add("selected");
        btn.setAttribute("aria-checked", "true");
      }

      if (revealed) {
        btn.classList.add("disabled");
        if (i === q.correct) {
          btn.classList.remove("selected");
          btn.classList.add("correct");
        } else if (state.answers[q.id] === i) {
          btn.classList.remove("selected");
          btn.classList.add("incorrect");
        }
      }

      const letter = document.createElement("span");
      letter.className = "choice-letter";
      letter.textContent = LETTERS[i];

      const text = document.createElement("span");
      text.className = "choice-text";
      text.innerHTML = choice;

      btn.appendChild(letter);
      btn.appendChild(text);

      if (!revealed) {
        btn.addEventListener("click", () => selectChoice(i));
      }

      choicesContainer.appendChild(btn);
    });

    if (revealed) {
      showFeedback(q);
    } else {
      feedbackPanel.classList.add("hidden");
    }

    backBtn.disabled = state.currentIndex === 0;

    if (revealed) {
      if (state.currentIndex === total - 1) {
        nextBtn.innerHTML = `Finish <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
      } else {
        nextBtn.innerHTML = `Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
      }
    } else {
      nextBtn.innerHTML = `Check <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    }

    $(".quiz-main").scrollTop = 0;
    renderMath();
  }

  function selectChoice(index) {
    const q = getActiveQuestions()[state.currentIndex];
    if (state.revealed[q.id]) return;

    state.answers[q.id] = index;

    const btns = choicesContainer.querySelectorAll(".choice-btn");
    btns.forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
      btn.setAttribute("aria-checked", i === index ? "true" : "false");
    });
  }

  function handleNext() {
    const qs = getActiveQuestions();
    const q = qs[state.currentIndex];

    if (!state.revealed[q.id]) {
      const selected = state.answers[q.id];

      if (selected === undefined) {
        state.results[q.id] = "skipped";
      } else if (selected === q.correct) {
        state.results[q.id] = "correct";
      } else {
        state.results[q.id] = "incorrect";
      }

      state.revealed[q.id] = true;
      renderQuestion();
      return;
    }

    if (state.currentIndex < qs.length - 1) {
      state.currentIndex++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function handleBack() {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderQuestion();
    }
  }

  function showFeedback(q) {
    const result = state.results[q.id];
    feedbackPanel.classList.remove("hidden");

    feedbackHeader.className = "feedback-header " + (result === "correct" ? "correct" : "incorrect");

    if (result === "correct") {
      feedbackIcon.textContent = "\u2713";
      feedbackTitle.textContent = "Correct!";
      feedbackAnswers.innerHTML = `
        <div class="correct-answer">Your answer: <strong>${LETTERS[state.answers[q.id]]}.</strong> ${q.choices[state.answers[q.id]]}</div>
      `;
    } else if (result === "incorrect") {
      feedbackIcon.textContent = "\u2717";
      feedbackTitle.textContent = "Incorrect";
      feedbackAnswers.innerHTML = `
        <div class="your-answer">Your answer: <strong>${LETTERS[state.answers[q.id]]}.</strong> ${q.choices[state.answers[q.id]]}</div>
        <div class="correct-answer" style="color: var(--correct-green); margin-top: 4px;">Correct answer: <strong>${LETTERS[q.correct]}.</strong> ${q.choices[q.correct]}</div>
      `;
    } else {
      feedbackIcon.textContent = "\u2014";
      feedbackTitle.textContent = "Skipped";
      feedbackHeader.className = "feedback-header incorrect";
      feedbackAnswers.innerHTML = `
        <div class="correct-answer" style="color: var(--correct-green);">Correct answer: <strong>${LETTERS[q.correct]}.</strong> ${q.choices[q.correct]}</div>
      `;
    }

    explanationText.innerHTML = q.explanation;

    renderMath();
    setTimeout(() => {
      feedbackPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  }

  function openNavigator() {
    navigatorGrid.innerHTML = "";
    getActiveQuestions().forEach((q, i) => {
      const btn = document.createElement("button");
      btn.className = "nav-q-btn";
      btn.textContent = i + 1;

      if (i === state.currentIndex) {
        btn.classList.add("current");
      } else if (state.results[q.id] === "correct") {
        btn.classList.add("answered-correct");
      } else if (state.results[q.id] === "incorrect") {
        btn.classList.add("answered-incorrect");
      } else if (state.answers[q.id] !== undefined) {
        btn.classList.add("answered");
      }

      btn.addEventListener("click", () => {
        state.currentIndex = i;
        renderQuestion();
        closeNavigator();
      });

      navigatorGrid.appendChild(btn);
    });

    navigatorOverlay.classList.remove("hidden");
  }

  function closeNavigator() {
    navigatorOverlay.classList.add("hidden");
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.timerSeconds / 60).toString().padStart(2, "0");
    const secs = (state.timerSeconds % 60).toString().padStart(2, "0");
    timerDisplay.textContent = `${mins}:${secs}`;
  }

  function toggleTimer() {
    state.timerVisible = !state.timerVisible;
    timerDisplay.style.display = state.timerVisible ? "inline" : "none";
    hideTimerBtn.textContent = state.timerVisible ? "Hide" : "Show";
  }

  function handlePassageSelection() {
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    if (!passageText.contains(range.commonAncestorContainer)) return;

    highlightToolbar.classList.remove("hidden");

    const rect = range.getBoundingClientRect();
    const tbWidth = highlightToolbar.offsetWidth;
    const tbHeight = highlightToolbar.offsetHeight;

    let top = rect.top - tbHeight - 8;
    let left = rect.left + rect.width / 2 - tbWidth / 2;

    if (top < 8) top = rect.bottom + 8;
    if (top < 8) top = 8;
    if (top + tbHeight > window.innerHeight - 8) top = window.innerHeight - tbHeight - 8;
    if (left < 8) left = 8;
    if (left + tbWidth > window.innerWidth - 8) {
      left = window.innerWidth - tbWidth - 8;
    }

    highlightToolbar.style.top = top + "px";
    highlightToolbar.style.left = left + "px";
  }

  function applyHighlight() {
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) {
      highlightToolbar.classList.add("hidden");
      return;
    }

    const range = selection.getRangeAt(0);
    if (!passageText.contains(range.commonAncestorContainer)) {
      highlightToolbar.classList.add("hidden");
      return;
    }

    const span = document.createElement("span");
    span.className = "highlighted-text";
    try {
      range.surroundContents(span);
    } catch (_) {
      const contents = range.extractContents();
      span.appendChild(contents);
      range.insertNode(span);
    }

    selection.removeAllRanges();
    highlightToolbar.classList.add("hidden");
    saveHighlights();
  }

  function handleHighlightRemove(e) {
    const hl = e.target.closest(".highlighted-text");
    if (!hl || !passageText.contains(hl)) return;

    const parent = hl.parentNode;
    while (hl.firstChild) {
      parent.insertBefore(hl.firstChild, hl);
    }
    parent.removeChild(hl);
    parent.normalize();
    saveHighlights();
  }

  function saveHighlights() {
    const q = getActiveQuestions()[state.currentIndex];
    state.highlights[q.id] = passageText.innerHTML;
  }

  function finishQuiz() {
    clearInterval(state.timerInterval);
    window.removeEventListener("beforeunload", onBeforeUnload);

    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    const qs = getActiveQuestions();
    const total = qs.length;
    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;

    qs.forEach((q) => {
      const r = state.results[q.id];
      if (r === "correct") correctCount++;
      else if (r === "incorrect") incorrectCount++;
      else skippedCount++;
    });

    $("#score-number").textContent = correctCount;
    $("#score-total").textContent = `/ ${total}`;
    $("#correct-count").textContent = correctCount;
    $("#incorrect-count").textContent = incorrectCount;
    $("#skipped-count").textContent = skippedCount;

    const mins = Math.floor(state.timerSeconds / 60).toString().padStart(2, "0");
    const secs = (state.timerSeconds % 60).toString().padStart(2, "0");
    $("#total-time").textContent = `${mins}:${secs}`;

    const pct = correctCount / total;
    const circle = $("#score-circle");
    if (pct >= 0.8) {
      circle.style.borderColor = "var(--correct-green)";
      circle.style.background = "var(--correct-bg)";
      $("#score-number").style.color = "var(--correct-green)";
    } else if (pct >= 0.5) {
      circle.style.borderColor = "var(--primary-blue)";
      circle.style.background = "var(--primary-blue-light)";
      $("#score-number").style.color = "var(--primary-blue)";
    } else {
      circle.style.borderColor = "var(--incorrect-red)";
      circle.style.background = "var(--incorrect-bg)";
      $("#score-number").style.color = "var(--incorrect-red)";
    }

    renderReviewList("incorrect");
  }

  function renderReviewList(filter) {
    const list = $("#review-list");
    list.innerHTML = "";

    getActiveQuestions().forEach((q, i) => {
      const result = state.results[q.id] || "skipped";

      if (filter === "correct" && result !== "correct") return;
      if (filter === "incorrect" && result !== "incorrect" && result !== "skipped") return;

      const card = document.createElement("div");
      card.className = `review-card ${result}`;

      const statusText =
        result === "correct" ? "Correct" : result === "incorrect" ? "Incorrect" : "Skipped";

      const preview = q.question.length > 60 ? q.question.substring(0, 60) + "..." : q.question;

      card.innerHTML = `
        <div class="review-card-header">
          <div class="review-card-left">
            <span class="review-q-num">${i + 1}</span>
            <span class="review-question-preview">${preview}</span>
          </div>
          <div style="display:flex;align-items:center;">
            <span class="review-status">${statusText}</span>
            <span class="review-expand-icon">\u25BC</span>
          </div>
        </div>
        <div class="review-card-body">
          ${q.imageUrl ? `<div class="review-graph-image"><img src="${q.imageUrl}" alt="Data table or graph"></div>` : ""}
          <div class="review-passage">${q.passage}</div>
          <div class="review-question-full" style="font-weight:600;margin-bottom:12px;font-size:0.875rem;">${q.question}</div>
          ${
            state.answers[q.id] !== undefined
              ? `<div class="review-answer-row">
                  <span style="color:${result === "correct" ? "var(--correct-green)" : "var(--incorrect-red)"}; font-weight:600;">
                    Your answer: ${LETTERS[state.answers[q.id]]}. ${q.choices[state.answers[q.id]]}
                  </span>
                </div>`
              : `<div class="review-answer-row" style="color:var(--warning-amber);font-weight:600;">No answer selected</div>`
          }
          ${
            result !== "correct"
              ? `<div class="review-answer-row" style="margin-top:4px;">
                  <span style="color:var(--correct-green); font-weight:600;">
                    Correct answer: ${LETTERS[q.correct]}. ${q.choices[q.correct]}
                  </span>
                </div>`
              : ""
          }
          <div class="review-explanation">
            <strong>Explanation</strong>
            ${q.explanation}
          </div>
        </div>
      `;

      const header = card.querySelector(".review-card-header");
      header.addEventListener("click", () => {
        card.classList.toggle("expanded");
      });

      if (result === "incorrect" || result === "skipped") {
        card.classList.add("expanded");
      }

      list.appendChild(card);
    });

    if (list.children.length === 0) {
      list.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted);font-size:0.938rem;">
        ${filter === "incorrect" ? "No wrong answers. Great job!" : "No questions to display."}
      </div>`;
    }
    renderMath();
  }

  function restartQuiz() {
    resultsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    const circle = $("#score-circle");
    circle.style.borderColor = "";
    circle.style.background = "";
    $("#score-number").style.color = "";
  }

  function confirmGoHome() {
    if (!confirm("Progress will not be saved.\nAre you sure you want to exit?")) return;
    goHome();
  }

  function goHome() {
    clearInterval(state.timerInterval);
    window.removeEventListener("beforeunload", onBeforeUnload);
    quizScreen.classList.add("hidden");
    resultsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    const circle = $("#score-circle");
    circle.style.borderColor = "";
    circle.style.background = "";
    $("#score-number").style.color = "";
  }

  init();
})();
