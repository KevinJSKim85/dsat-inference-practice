const yjExerciseQuestions = [
  // ============================================================
  // SECTION 1: VOCABULARY IN CONTEXT (Q1–17)
  // Weakness: Student chose "earnest" instead of "sanguine" —
  // cannot infer nuanced vocabulary from passage context.
  // Strategy: Start with moderate-hard, escalate to hardest.
  // ============================================================
  {
    id: 1,
    passage: "Although several members of the city council expressed deep reservations about the proposed transit expansion, the mayor remained ______ that voters would approve the ballot measure, pointing to recent polling data showing broad public support for improved commuter rail service.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["sanguine", "meticulous", "indifferent", "apprehensive"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (sanguine)</strong><br><br>The mayor is optimistic despite others' reservations, citing favorable polls. \"Sanguine\" means optimistic or positive, especially in a difficult situation.<br><br><strong>(B) meticulous</strong> means careful and precise — describes work style, not an emotional outlook toward an outcome. <em>(Wrong meaning)</em><br><strong>(C) indifferent</strong> means unconcerned, but the mayor is actively pointing to evidence — she clearly cares. <em>(Contradicts passage)</em><br><strong>(D) apprehensive</strong> means worried, which is the opposite of the mayor's confident stance. <em>(Opposite meaning)</em>"
  },
  {
    id: 2,
    passage: "Critics initially dismissed the novelist's experimental prose as needlessly obscure, but a growing body of scholarship now argues that her stylistic choices were not ______ — rather, every fragmented sentence and abrupt shift in perspective served a deliberate narrative purpose tied to her themes of displacement and memory.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["arbitrary", "conventional", "lucid", "pragmatic"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (arbitrary)</strong><br><br>The passage contrasts an initial reading (needlessly obscure) with a reevaluation (deliberate purpose). \"Arbitrary\" means random or without reason — the scholarship is arguing the choices were NOT random.<br><br><strong>(B) conventional</strong> means traditional — saying choices were \"not conventional\" doesn't address the deliberateness issue. <em>(Misses the contrast)</em><br><strong>(C) lucid</strong> means clear — saying they were \"not lucid\" would agree with critics, not rebut them. <em>(Wrong direction)</em><br><strong>(D) pragmatic</strong> means practical — irrelevant to the debate about randomness vs. intentionality. <em>(Wrong domain)</em>"
  },
  {
    id: 3,
    passage: "The diplomat's reputation for ______ made her an ideal candidate for mediating the territorial dispute: where previous negotiators had inflamed tensions with blunt public statements, she demonstrated an ability to navigate sensitive issues with discretion and measured language.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["tact", "candor", "obstinacy", "ambivalence"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (tact)</strong><br><br>The passage describes someone who uses \"discretion and measured language\" in contrast to \"blunt public statements.\" \"Tact\" means sensitivity and skill in dealing with delicate situations.<br><br><strong>(B) candor</strong> means frankness/openness — this is closer to the \"blunt\" approach she avoids. <em>(Opposite quality)</em><br><strong>(C) obstinacy</strong> means stubborn refusal to change — irrelevant to diplomatic skill. <em>(Wrong meaning)</em><br><strong>(D) ambivalence</strong> means having mixed feelings — the passage emphasizes skill, not uncertainty. <em>(Misreads passage)</em>"
  },
  {
    id: 4,
    passage: "Behavioral ecologist Samantha Dietz found that juvenile bonobos in captive environments engaged in significantly more play behavior than their wild counterparts. Dietz proposed that the captive bonobos' reduced need to forage or avoid predators left them with surplus energy, which they ______ through extended bouts of social play.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["channeled", "suppressed", "accumulated", "forfeited"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (channeled)</strong><br><br>The bonobos have \"surplus energy\" and redirect it into play. \"Channeled\" means directed energy toward a specific activity.<br><br><strong>(B) suppressed</strong> means held back — but the passage says they expressed the energy through play. <em>(Opposite)</em><br><strong>(C) accumulated</strong> means built up — the passage already says they have surplus energy; the blank describes what they DID with it. <em>(Doesn't complete the logic)</em><br><strong>(D) forfeited</strong> means gave up — makes no sense with energy being actively used. <em>(Wrong meaning)</em>"
  },
  {
    id: 5,
    passage: "In her analysis of eighteenth-century British portraiture, art historian Celine Barrow argues that the elaborate settings depicted in many paintings of the era were not merely decorative but were ______ — each classical column, manicured garden, and leather-bound volume was carefully selected to communicate the sitter's social aspirations and intellectual pretensions to viewers.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["symbolic", "anachronistic", "ostentatious", "improvisational"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (symbolic)</strong><br><br>The passage says settings were \"not merely decorative\" but communicated social meaning — objects were chosen to represent ideas. That is symbolic function.<br><br><strong>(B) anachronistic</strong> means belonging to a different time period — no time-displacement issue here. <em>(Wrong concept)</em><br><strong>(C) ostentatious</strong> means showy — while the settings are elaborate, the argument is about meaning, not mere showiness. <em>(Too surface-level)</em><br><strong>(D) improvisational</strong> means spontaneous — the passage says items were \"carefully selected,\" the opposite of improvised. <em>(Contradicts passage)</em>"
  },
  {
    id: 6,
    passage: "Despite the pharmaceutical company's assurances that the new drug had been rigorously tested, several independent researchers remained ______, noting that the published trial data excluded patients who had discontinued treatment due to adverse side effects — an omission that could substantially alter the drug's apparent safety profile.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["skeptical", "vindicated", "impartial", "complacent"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (skeptical)</strong><br><br>The researchers doubt the company's claims because of data omissions. \"Skeptical\" means having doubts or reservations.<br><br><strong>(B) vindicated</strong> means proven right — but the researchers are raising concerns, not being proven correct. <em>(Wrong stage of argument)</em><br><strong>(C) impartial</strong> means unbiased — while they may be neutral, the passage emphasizes their doubt, not neutrality. <em>(Misses the tone)</em><br><strong>(D) complacent</strong> means self-satisfied and uncritical — the opposite of raising concerns. <em>(Opposite meaning)</em>"
  },
  {
    id: 7,
    passage: "Economist Rhea Kapoor argues that the rapid adoption of cashless payment systems in many developing nations has been ______ for small-scale street vendors, who have seen customer traffic increase as consumers no longer need to carry physical currency to make purchases.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["advantageous", "negligible", "detrimental", "contentious"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (advantageous)</strong><br><br>Vendors saw increased customer traffic — a clear positive outcome. \"Advantageous\" means favorable or beneficial.<br><br><strong>(B) negligible</strong> means insignificant — but increased customer traffic is a meaningful impact. <em>(Contradicts evidence)</em><br><strong>(C) detrimental</strong> means harmful — the opposite of the positive outcome described. <em>(Opposite)</em><br><strong>(D) contentious</strong> means controversial — the passage presents a straightforward positive finding, not a debated one. <em>(Wrong tone)</em>"
  },
  {
    id: 8,
    passage: "While the two candidates' economic platforms shared broad similarities, their approaches to environmental regulation were ______ : one advocated for immediate mandatory emissions caps, while the other proposed a gradual, market-based incentive system with no binding limits for the first decade.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["divergent", "superficial", "redundant", "ambiguous"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (divergent)</strong><br><br>The colon introduces a contrast between mandatory caps and voluntary incentives — markedly different approaches. \"Divergent\" means differing or moving apart.<br><br><strong>(B) superficial</strong> means shallow — but the passage describes substantive policy differences. <em>(Wrong characterization)</em><br><strong>(C) redundant</strong> means unnecessarily repetitive — opposite of different. <em>(Opposite meaning)</em><br><strong>(D) ambiguous</strong> means unclear — the positions are clearly stated, not vague. <em>(Contradicts passage)</em>"
  },
  {
    id: 9,
    passage: "Marine biologist Tomás Herrera observed that the deep-sea squid Vampyroteuthis infernalis, despite its menacing common name (\"vampire squid from hell\"), feeds exclusively on marine snow — a gentle rain of detritus composed of dead plankton, fecal pellets, and other organic particles. Herrera noted that the species' feeding behavior is remarkably ______, requiring minimal energy expenditure compared to the active predation practiced by most other cephalopods.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["passive", "voracious", "erratic", "specialized"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (passive)</strong><br><br>The squid feeds on drifting particles with \"minimal energy expenditure\" — the opposite of active hunting. \"Passive\" means receiving action rather than initiating it.<br><br><strong>(B) voracious</strong> means extremely hungry/greedy — contradicts the gentle, low-energy feeding described. <em>(Opposite)</em><br><strong>(C) erratic</strong> means unpredictable — the passage describes a consistent, low-energy pattern. <em>(Wrong characterization)</em><br><strong>(D) specialized</strong> means adapted for a particular function — while true, it misses the key contrast with active predation that the passage emphasizes. <em>(Too vague for the context)</em>"
  },
  {
    id: 10,
    passage: "The findings of Dr. Amara Osei's longitudinal study were ______ : after tracking 3,000 participants over fifteen years, her team found virtually no measurable correlation between daily multivitamin use and reduced incidence of cardiovascular disease, challenging the widely held belief that such supplements offer meaningful heart-health benefits.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["sobering", "corroborative", "ambivalent", "preliminary"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (sobering)</strong><br><br>The findings challenge a popular belief with disappointing (for supplement advocates) results. \"Sobering\" means making one think seriously; giving a reality check.<br><br><strong>(B) corroborative</strong> means confirming — the findings contradicted the popular belief, not confirmed it. <em>(Opposite direction)</em><br><strong>(C) ambivalent</strong> means mixed/uncertain — the results were clear (\"virtually no measurable correlation\"). <em>(Contradicts clarity of findings)</em><br><strong>(D) preliminary</strong> means initial/early-stage — a fifteen-year longitudinal study is the opposite of preliminary. <em>(Contradicts passage)</em>"
  },
  {
    id: 11,
    passage: "Linguist Priya Nair has documented how certain rural dialects of Tamil that were once considered ______ by urban speakers are now being actively studied and preserved by academic institutions, a shift Nair attributes to growing recognition that these varieties contain unique grammatical structures not found in the standardized literary form.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["provincial", "extinct", "prestigious", "authentic"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (provincial)</strong><br><br>The passage describes a shift from dismissal to appreciation. Urban speakers looked down on rural dialects, and now academics value them. \"Provincial\" means narrow, unsophisticated, or associated with rural areas in a dismissive way.<br><br><strong>(B) extinct</strong> means no longer existing — they are still spoken and being studied. <em>(Contradicts passage)</em><br><strong>(C) prestigious</strong> means having high status — opposite of the initial dismissive attitude. <em>(Opposite meaning)</em><br><strong>(D) authentic</strong> means genuine — this is positive, not aligned with the initial dismissiveness. <em>(Wrong tone)</em>"
  },
  {
    id: 12,
    passage: "Although neuroscientist Laura Chen's model of memory consolidation during sleep was initially praised for its elegance, subsequent experiments have produced results that are ______ with its central predictions, leading several researchers to propose substantial modifications to the framework.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["inconsistent", "synonymous", "concurrent", "interchangeable"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (inconsistent)</strong><br><br>Results that conflict with predictions lead to proposed modifications. \"Inconsistent\" means not in agreement — experiments contradicted the model.<br><br><strong>(B) synonymous</strong> means identical in meaning — if results matched predictions, no modifications would be needed. <em>(Opposite)</em><br><strong>(C) concurrent</strong> means happening at the same time — describes timing, not agreement/disagreement. <em>(Wrong dimension)</em><br><strong>(D) interchangeable</strong> means able to substitute — results and predictions aren't substitutable concepts. <em>(Nonsensical)</em>"
  },
  {
    id: 13,
    passage: "In a 2023 survey of over 5,000 working professionals, organizational psychologist Daisuke Morita found that employees whose managers provided frequent, specific praise reported significantly higher job satisfaction than those whose managers offered only ______ acknowledgment — vague statements like \"good work\" that failed to identify what, precisely, the employee had done well.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["perfunctory", "effusive", "reciprocal", "unsolicited"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (perfunctory)</strong><br><br>The passage contrasts \"frequent, specific praise\" with \"vague statements\" that don't identify achievements. \"Perfunctory\" means carried out with minimal effort or as a routine duty — surface-level acknowledgment.<br><br><strong>(B) effusive</strong> means excessively enthusiastic — the problem described is too little effort, not too much. <em>(Opposite quality)</em><br><strong>(C) reciprocal</strong> means mutual/returned — the passage is about quality of feedback, not whether it goes both ways. <em>(Wrong dimension)</em><br><strong>(D) unsolicited</strong> means not requested — irrelevant to whether the praise is specific or vague. <em>(Wrong dimension)</em>"
  },
  {
    id: 14,
    passage: "Historian Marcus Albright contends that the popular narrative of the 1920s as an era of universal prosperity is fundamentally ______ : while urban manufacturing wages did rise, the decade also saw devastating crop price collapses that drove thousands of rural families into bankruptcy, a crisis largely invisible to metropolitan commentators of the period.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["misleading", "prescient", "exhaustive", "unprecedented"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (misleading)</strong><br><br>The colon introduces evidence that the \"universal prosperity\" narrative ignores rural hardship. \"Misleading\" means giving a false impression — the narrative is incomplete and therefore inaccurate.<br><br><strong>(B) prescient</strong> means having foresight about the future — irrelevant to accuracy of a historical narrative. <em>(Wrong concept)</em><br><strong>(C) exhaustive</strong> means thorough — the argument is that the narrative is incomplete, not exhaustive. <em>(Opposite)</em><br><strong>(D) unprecedented</strong> means never done before — describes novelty, not accuracy. <em>(Wrong dimension)</em>"
  },
  {
    id: 15,
    passage: "Unlike their more ______ counterparts, who published manifestos and gave combative interviews denouncing academic painting, the Impressionists Berthe Morisot and Mary Cassatt pursued their aesthetic innovations without seeking public confrontation, preferring to let their canvases speak for themselves.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["polemical", "prolific", "reclusive", "derivative"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (polemical)</strong><br><br>The contrasting artists published \"manifestos\" and gave \"combative interviews\" — they were aggressively argumentative. \"Polemical\" means strongly critical, argumentative, or controversial.<br><br><strong>(B) prolific</strong> means producing a lot — output quantity isn't the contrast being drawn. <em>(Wrong dimension)</em><br><strong>(C) reclusive</strong> means avoiding others — the passage describes these counterparts as publicly active and vocal. <em>(Opposite)</em><br><strong>(D) derivative</strong> means imitative/unoriginal — the passage is about public combativeness, not originality. <em>(Wrong dimension)</em>"
  },
  {
    id: 16,
    passage: "Geochemist Yoko Tanaka's analysis revealed that the volcanic ash layer preserved in the lake sediment was compositionally ______ to ash from the Mount Mazama eruption of approximately 5700 BCE, strongly supporting the hypothesis that the eruption's fallout reached as far east as the Great Plains.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["analogous", "antithetical", "peripheral", "susceptible"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (analogous)</strong><br><br>The ash composition matches Mount Mazama ash, supporting a connection. \"Analogous\" means comparable in relevant respects.<br><br><strong>(B) antithetical</strong> means directly opposed — this would contradict the hypothesis, not support it. <em>(Opposite)</em><br><strong>(C) peripheral</strong> means marginal/minor — doesn't describe compositional similarity. <em>(Wrong meaning)</em><br><strong>(D) susceptible</strong> means vulnerable — describes a tendency to be affected, not a similarity. <em>(Wrong meaning)</em>"
  },
  {
    id: 17,
    passage: "The choreographer's latest work has been praised for its ______ : in a dance world that increasingly values spectacle and technological effects, her piece used nothing but five dancers and a bare stage, yet audiences consistently described the performance as profoundly moving and visually compelling.",
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["austerity", "flamboyance", "spontaneity", "versatility"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (austerity)</strong><br><br>The piece used minimal resources (\"five dancers and a bare stage\") in contrast to spectacle trends. \"Austerity\" means severe simplicity or lack of adornment — stripped-down aesthetic.<br><br><strong>(B) flamboyance</strong> means showy/extravagant — the opposite of the minimalism described. <em>(Opposite)</em><br><strong>(C) spontaneity</strong> means unplanned — the passage doesn't discuss whether the work was planned or improvised. <em>(Wrong dimension)</em><br><strong>(D) versatility</strong> means adaptability — the praise is for restraint, not range. <em>(Wrong quality)</em>"
  },

  // ============================================================
  // SECTION 2: WEAKEN / STRENGTHEN / COMMAND OF EVIDENCE (Q18–34)
  // Weakness: Student confused which finding would weaken a claim
  // about voter behavior — chose irrelevant comparison (D)
  // instead of the directly undermining finding (C).
  // Strategy: Train identifying the DIRECT logical connection.
  // ============================================================
  {
    id: 18,
    passage: "Sociologist Elena Marchetti theorizes that the decline in civic participation among young adults in the United States since 2000 is primarily driven by increased geographic mobility — frequent relocations prevent the formation of stable community ties that traditionally motivate civic engagement such as voting and volunteering.",
    question: "Which finding, if true, would most directly weaken Marchetti's theory?",
    choices: [
      "Young adults who relocated frequently reported levels of civic participation comparable to those who remained in the same community for over a decade.",
      "Civic participation has also declined among older adults, though to a lesser degree than among young adults.",
      "Countries with higher rates of geographic mobility among young adults than the US have not experienced similar declines in civic participation.",
      "Young adults in the US spend more time on social media than any previous generation did at the same age."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Marchetti's claim: frequent relocation → weaker community ties → less civic participation. If frequent movers participate at the same rate as non-movers, the relocation mechanism fails.<br><br><strong>(B)</strong> Older adults declining too could suggest a shared cause, but doesn't directly test whether mobility is the driver for young adults. <em>(Tangential)</em><br><strong>(C)</strong> Cross-country comparison introduces confounding variables (different civic cultures, institutions). It's suggestive but less direct than within-US data. <em>(Less direct)</em><br><strong>(D)</strong> Social media use is a separate variable — doesn't address whether mobility specifically matters. <em>(Alternative explanation, doesn't weaken)</em>"
  },
  {
    id: 19,
    passage: "Archaeologist James Whitfield hypothesizes that the abandonment of the Ancestral Puebloan settlement at Mesa Verde around 1285 CE was primarily caused by prolonged drought, which would have made the region's agriculture unsustainable. Tree-ring data from the area confirm that a severe drought lasting approximately 23 years began around 1276 CE.",
    question: "Which finding, if true, would most directly weaken Whitfield's hypothesis?",
    choices: [
      "Several other Puebloan settlements in regions less affected by the drought were also abandoned during the same period.",
      "The drought at Mesa Verde was preceded by a decade of above-average rainfall that produced surplus crop yields.",
      "Archaeological evidence shows that Mesa Verde's population had already declined by 40% before the drought began in 1276 CE.",
      "Some Puebloan groups who left Mesa Verde eventually settled in areas with comparable rainfall levels."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>If population was already declining significantly BEFORE the drought started, the drought cannot be the PRIMARY cause of abandonment. The timeline doesn't fit.<br><br><strong>(A)</strong> Other settlements abandoning for unknown reasons doesn't directly address whether drought caused Mesa Verde's abandonment. <em>(Tangential)</em><br><strong>(B)</strong> Prior good rainfall doesn't undermine the drought hypothesis — if anything, it could make the drought more devastating. <em>(Could strengthen)</em><br><strong>(D)</strong> Where people settled afterward doesn't address why they left. <em>(Wrong question)</em>"
  },
  {
    id: 20,
    passage: "Psychologist Miriam Falk's study found that children who regularly ate breakfast scored an average of 12% higher on standardized math tests than children who frequently skipped breakfast. Falk concluded that eating breakfast directly improves children's cognitive performance on mathematical tasks.",
    question: "Which finding, if true, would most directly weaken Falk's conclusion?",
    choices: [
      "Children who ate breakfast also tended to come from households with higher incomes and more parental involvement in education than children who skipped breakfast.",
      "The difference in math scores between breakfast-eaters and breakfast-skippers was larger for younger children than for older children.",
      "Children who ate breakfast performed similarly to breakfast-skippers on reading comprehension tests.",
      "Some children who skipped breakfast reported doing so by choice rather than due to food insecurity."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Falk claims a DIRECT causal link: breakfast → better math performance. If breakfast-eaters also have wealthier, more involved parents, the higher scores could be caused by those socioeconomic factors, not breakfast itself. This is a classic confounding variable.<br><br><strong>(B)</strong> Age-related variation doesn't challenge whether breakfast is the cause — it just adds nuance. <em>(Refines but doesn't weaken)</em><br><strong>(C)</strong> Different results on reading vs. math could actually support a specific cognitive effect of breakfast. <em>(Could strengthen)</em><br><strong>(D)</strong> Reason for skipping doesn't address whether breakfast itself caused the score difference. <em>(Irrelevant to mechanism)</em>"
  },
  {
    id: 21,
    passage: "Climate scientist Raj Patel has proposed that the formation of the Sahara Desert approximately 5,000 years ago was triggered primarily by shifts in Earth's orbital parameters, which reduced monsoon rainfall over North Africa. Patel argues that the orbital changes alone were sufficient to transform the previously green, vegetated landscape into an arid desert.",
    question: "Which finding, if true, would most directly weaken Patel's claim that orbital changes alone were sufficient?",
    choices: [
      "Climate models that include only orbital parameter changes produce a gradual transition over 10,000 years, whereas geological evidence shows the Sahara formed within approximately 500 years.",
      "Similar orbital shifts occurred at earlier points in Earth's history without producing desertification in North Africa.",
      "The Sahara Desert has experienced brief periods of increased vegetation during the last 5,000 years.",
      "Other regions at similar latitudes to North Africa did not undergo desertification during the same period."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>If orbital changes alone predict a 10,000-year gradual change but the actual transition happened in 500 years, orbital changes ALONE cannot explain the speed — additional factors must have been involved. This directly undermines \"alone were sufficient.\"<br><br><strong>(B)</strong> Earlier instances without desertification could mean conditions were different then, not necessarily that orbital changes are insufficient under the right conditions. <em>(Less direct)</em><br><strong>(C)</strong> Brief vegetation periods after formation don't address what caused the initial desertification. <em>(Wrong timeframe)</em><br><strong>(D)</strong> Different regions may have different vegetation, soil, and feedback systems — not a direct test of the orbital mechanism. <em>(Confounding factors)</em>"
  },
  {
    id: 22,
    passage: "Behavioral economists have long argued that people tend to overvalue items they already own — a phenomenon called the endowment effect. In a classic experiment, participants who were randomly given a coffee mug demanded an average of $7.12 to sell it, while those who were not given the mug were willing to pay only $2.87 to buy it. Researchers attributed this gap to loss aversion: the psychological pain of losing the mug exceeds the pleasure of gaining it.",
    question: "Which finding, if true, would most directly challenge the loss aversion explanation for the price gap?",
    choices: [
      "When participants were told they would be given one of two items and could trade after receiving it, the price gap between sellers and buyers disappeared.",
      "The price gap was observed in experiments conducted across multiple countries with different cultural attitudes toward material possessions.",
      "Participants who were given the mug and asked to evaluate its aesthetic qualities demanded even higher selling prices.",
      "Professional traders who buy and sell goods daily showed a smaller endowment effect than non-traders."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>If the gap disappears when people expect to trade (reducing attachment/ownership feelings), the gap may be about transaction context rather than loss aversion per se. This challenges loss aversion as THE explanation.<br><br><strong>(B)</strong> Cross-cultural consistency could strengthen the claim that it's a universal psychological effect. <em>(Strengthens)</em><br><strong>(C)</strong> Evaluating aesthetics increasing the price is consistent with, not challenging, the endowment effect. <em>(Supports)</em><br><strong>(D)</strong> Professional traders having less effect could be explained by loss aversion still existing but being overcome by experience — it doesn't challenge the mechanism. <em>(Consistent with theory)</em>"
  },
  {
    id: 23,
    passage: "Neurobiologist Kenji Yamamoto has proposed that the primary function of REM sleep is memory consolidation — specifically, that the brain replays and strengthens neural pathways associated with recently learned information during REM periods. Yamamoto points to studies showing that depriving rats of REM sleep impairs their ability to remember recently learned maze routes.",
    question: "Which finding, if true, would most directly strengthen Yamamoto's proposal?",
    choices: [
      "Neural recordings taken during REM sleep in rats show reactivation of the exact same hippocampal firing patterns that occurred while the rats were learning the maze.",
      "Rats deprived of all sleep, not just REM sleep, also showed impaired maze performance.",
      "Humans who report more vivid dreams tend to perform slightly better on memory tests than those who rarely remember dreams.",
      "The total amount of REM sleep per night decreases steadily as humans age from infancy to adulthood."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>If the brain literally replays learning-specific neural patterns during REM, this directly supports the claim that REM consolidates recently learned information through pathway strengthening.<br><br><strong>(B)</strong> All-sleep deprivation impairing memory doesn't isolate REM — the effect could come from any sleep stage. <em>(Doesn't isolate REM)</em><br><strong>(C)</strong> Dream vividness is a subjective report and not a direct measure of memory consolidation during REM. <em>(Indirect)</em><br><strong>(D)</strong> Age-related REM changes don't address the consolidation mechanism. <em>(Wrong dimension)</em>"
  },
  {
    id: 24,
    passage: "Geneticist Sofia Alvarez has argued that the high prevalence of lactose tolerance in Northern European populations is best explained by a strong selective advantage: in regions where sunlight is scarce, the ability to digest milk provided a crucial source of vitamin D and calcium. Alvarez notes that populations in equatorial Africa, where sunlight and thus vitamin D are abundant, have much lower rates of lactose tolerance.",
    question: "Which finding, if true, would most directly weaken Alvarez's argument?",
    choices: [
      "Several pastoral populations in East Africa with high exposure to sunlight also have very high rates of lactose tolerance.",
      "Lactose tolerance in Northern European populations became prevalent approximately 5,000 years ago.",
      "Vitamin D can also be obtained from fatty fish, which was a dietary staple in many Northern European coastal communities.",
      "Lactose tolerance is determined by a single genetic mutation that appears to have arisen independently in multiple populations."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Alvarez's argument depends on low sunlight creating the selection pressure. If equatorial African populations with abundant sunlight ALSO evolved high lactose tolerance, sunlight scarcity cannot be the key driver — another factor (like pastoralism) may matter more.<br><br><strong>(B)</strong> The timing of the trait's spread doesn't challenge the sunlight mechanism. <em>(Neutral)</em><br><strong>(C)</strong> Alternative vitamin D sources could weaken the argument somewhat, but doesn't directly disprove it — milk could still have been advantageous. <em>(Less direct)</em><br><strong>(D)</strong> Independent origins are consistent with multiple selection pressures, including sunlight scarcity. <em>(Neutral)</em>"
  },
  {
    id: 25,
    passage: "Urban planner Diane Kowalski claims that the introduction of protected bicycle lanes in downtown Portland directly caused a 35% increase in cycling commuters over five years. Kowalski argues that the infrastructure change removed the primary barrier — perceived danger — that had discouraged potential cyclists.",
    question: "Which finding, if true, would most directly weaken Kowalski's claim about the cause of the increase?",
    choices: [
      "Cities that did not add protected bicycle lanes but implemented other cycling incentives, such as subsidized bike-share programs, experienced comparable increases in cycling commuters during the same period.",
      "The number of cycling commuters in Portland had been increasing at a steady rate for a decade before the protected lanes were built.",
      "Surveys of Portland cyclists found that 80% cited the protected lanes as an important factor in their decision to commute by bicycle.",
      "The cost of constructing the protected bicycle lanes exceeded initial budget projections by 40%."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>If cycling was already increasing at the same rate before the lanes were built, the lanes may not have caused the increase — it was a pre-existing trend. This undermines the causal claim.<br><br><strong>(A)</strong> Other cities with different programs succeeding doesn't mean Portland's lanes didn't also work — multiple things can increase cycling. <em>(Doesn't directly weaken)</em><br><strong>(C)</strong> Cyclist surveys actually support Kowalski's claim. <em>(Strengthens)</em><br><strong>(D)</strong> Cost overruns are irrelevant to whether the lanes caused the cycling increase. <em>(Irrelevant)</em>"
  },
  {
    id: 26,
    passage: "Ecologist Maria Santos conducted a five-year study comparing insect diversity in organic farms and conventional farms in the Midwest United States. Santos found that organic farms had 47% greater insect species diversity than conventional farms and concluded that organic farming methods are inherently better for maintaining insect biodiversity.",
    question: "Which finding, if true, would most directly weaken Santos's conclusion?",
    choices: [
      "The organic farms in the study were all located adjacent to large nature reserves, while the conventional farms were surrounded by other farmland.",
      "Insect diversity on conventional farms varied significantly depending on which pesticides were used.",
      "Some insect species found on organic farms are considered agricultural pests that can damage crops.",
      "Organic farms in the study had been practicing organic methods for an average of only three years."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>If organic farms were next to nature reserves while conventional farms were isolated, the diversity difference could be due to proximity to wild habitat, not farming method. This is a critical confounding variable that undermines the \"inherently better\" conclusion.<br><br><strong>(B)</strong> Variation among conventional farms doesn't challenge the organic vs. conventional comparison. <em>(Tangential)</em><br><strong>(C)</strong> Whether some insects are pests doesn't affect whether organic farming supports more biodiversity. <em>(Irrelevant to the claim)</em><br><strong>(D)</strong> Three years might mean the full effect hasn't been realized — this could actually suggest the difference would be even larger, strengthening the conclusion. <em>(Could strengthen)</em>"
  },
  {
    id: 27,
    passage: "Political scientists who favor the traditional view of voter behavior claim that voting in an election does not change a voter's attitude toward the candidates in that election. Focusing on each US presidential election from 1976 to 1996, Ebonya Washington and Sendhil Mullainathan tested this claim by distinguishing between subjects who had just become old enough to vote (around half of whom actually voted) and otherwise similar subjects who were slightly too young to vote (and thus none of whom voted). Washington and Mullainathan compared the attitudes of the groups of subjects toward the winning candidate two years after each election.",
    question: "Which finding from Washington and Mullainathan's study, if true, would most directly weaken the claim made by people who favor the traditional view of voter behavior?",
    choices: [
      "Subjects' attitudes toward the winning candidate two years after a given election were strongly predicted by subjects' general political orientation, regardless of whether subjects were old enough to vote at the time of the election.",
      "Subjects who were not old enough to vote in a given election held significantly more positive attitudes towards the winning candidate two years later than they held at the time of the election.",
      "Subjects who voted in a given election held significantly more polarized attitudes toward the winning candidate two years later than did subjects who were not old enough to vote in that election.",
      "Two years after a given election, subjects who voted and subjects who were not old enough to vote were significantly more likely to express negative attitudes than positive attitudes toward the winning candidate in that election."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>The traditional view: voting does NOT change attitudes. The study compares voters vs. non-voters (who are otherwise similar — same age cohort). If voters show significantly MORE polarized attitudes than non-voters two years later, the act of voting appears to have changed their attitudes — directly weakening the traditional claim.<br><br><strong>(A)</strong> General political orientation predicting attitudes is consistent with both views — it doesn't test whether voting itself adds an independent effect. <em>(Doesn't isolate voting effect)</em><br><strong>(B)</strong> Non-voters' attitudes changing over time doesn't test whether VOTING specifically changes attitudes. <em>(Wrong group)</em><br><strong>(D)</strong> Both groups having negative attitudes would reflect general attitude patterns, not a voting-specific effect. <em>(No contrast between voters and non-voters)</em>"
  },
  {
    id: 28,
    passage: "Nutritional scientist Robert Fielding has proposed that the health benefits commonly attributed to the Mediterranean diet — reduced cardiovascular disease and longer lifespan — are primarily due to the high consumption of olive oil rather than other components of the diet such as fish, legumes, or whole grains.",
    question: "Which finding, if true, would most directly strengthen Fielding's proposal?",
    choices: [
      "Populations that consume high amounts of olive oil but do not follow other aspects of the Mediterranean diet show cardiovascular health outcomes similar to those of populations following the full Mediterranean diet.",
      "Olive oil contains polyphenols, antioxidant compounds that have been shown to reduce inflammation in laboratory studies.",
      "The Mediterranean diet has been practiced in various forms for centuries across multiple countries bordering the Mediterranean Sea.",
      "People who follow the Mediterranean diet tend to exercise more frequently than people who follow other diets."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Fielding claims olive oil is the PRIMARY driver. If populations eating lots of olive oil WITHOUT the other Mediterranean diet components show the same health benefits, it isolates olive oil as the key factor — directly supporting his claim.<br><br><strong>(B)</strong> Lab-level evidence about polyphenols is suggestive but doesn't prove olive oil drives the diet's overall benefits in real populations. <em>(Too indirect)</em><br><strong>(C)</strong> Historical information about the diet doesn't address which component drives health benefits. <em>(Irrelevant)</em><br><strong>(D)</strong> Exercise as a confounding variable would actually weaken the claim about diet components. <em>(Weakens)</em>"
  },
  {
    id: 29,
    passage: "Economist Wei Zhang argues that the proliferation of remote work since 2020 has been the primary driver of rising housing prices in small and mid-sized US cities, as workers who can now work from anywhere choose to relocate from expensive metropolitan areas to more affordable communities, increasing demand and thus prices in those markets.",
    question: "Which finding, if true, would most directly weaken Zhang's argument?",
    choices: [
      "Housing prices in small and mid-sized cities were already rising at comparable rates in the five years before widespread remote work adoption.",
      "Many companies have begun requiring employees to return to the office at least part-time since 2022.",
      "The housing markets in expensive metropolitan areas have not experienced significant price declines since 2020.",
      "Remote workers who relocate to small cities tend to have higher incomes than long-time residents of those cities."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>If prices were already rising at the same rate before remote work existed, remote work cannot be the PRIMARY driver — the trend predates the proposed cause.<br><br><strong>(B)</strong> Return-to-office policies could weaken Zhang's argument for more recent data, but don't address the initial 2020 price surge. <em>(Partial, not direct)</em><br><strong>(C)</strong> Metro prices not declining doesn't mean remote work isn't increasing demand elsewhere — people leaving doesn't necessarily crash the metro market. <em>(Non sequitur)</em><br><strong>(D)</strong> Income differences explain HOW remote workers could push prices up — this actually supports Zhang. <em>(Strengthens)</em>"
  },
  {
    id: 30,
    passage: "Marine biologist Aiko Hayashi hypothesizes that the global decline in sea otter populations over the past century has been a significant contributor to the collapse of kelp forest ecosystems. Hayashi's reasoning is based on a trophic cascade model: sea otters prey on sea urchins, which in turn graze on kelp. Without otters to control their numbers, sea urchin populations explode and destroy kelp forests.",
    question: "Which finding, if true, would most directly strengthen Hayashi's hypothesis?",
    choices: [
      "In regions where sea otter populations have been successfully reintroduced, kelp forest density has recovered to near-historical levels within a decade.",
      "Sea urchins are the only herbivore species known to graze on kelp in significant quantities.",
      "Kelp forests provide critical habitat for hundreds of marine species beyond sea otters and sea urchins.",
      "Global ocean temperatures have risen significantly over the past century, and kelp is sensitive to warm water."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>If reintroducing otters → kelp recovery, this is direct evidence of the proposed trophic cascade working in reverse: otters present → urchins controlled → kelp thrives. This is the strongest possible support for the causal chain.<br><br><strong>(B)</strong> Urchins being the only kelp grazer supports one link in the chain but doesn't test whether otters actually control urchin populations effectively. <em>(Partial support)</em><br><strong>(C)</strong> Kelp's ecological importance doesn't address whether otters are the key to kelp survival. <em>(Irrelevant to mechanism)</em><br><strong>(D)</strong> Rising temperatures as an alternative explanation for kelp decline would actually WEAKEN the otter hypothesis. <em>(Weakens)</em>"
  },
  {
    id: 31,
    passage: "Linguist Fatima Al-Rashidi has documented that bilingual children in her study switched between Arabic and English mid-sentence at significantly higher rates when speaking with other bilingual peers than when speaking with monolingual adults. Al-Rashidi interprets this as evidence that code-switching is a socially strategic behavior rather than a sign of linguistic confusion, as some earlier researchers had suggested.",
    question: "Which finding, if true, would most directly support Al-Rashidi's interpretation?",
    choices: [
      "The bilingual children in the study code-switched at specific conversational junctures — such as when joking or expressing solidarity — rather than at random points in sentences.",
      "Monolingual children in a control group used slang and informal language at higher rates with peers than with adults.",
      "The bilingual children performed at or above grade level on standardized language assessments in both Arabic and English.",
      "Earlier researchers who studied code-switching primarily observed children under the age of five, while Al-Rashidi's subjects were between ages eight and twelve."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>If code-switching occurs at specific social/pragmatic moments (jokes, solidarity) rather than randomly, it shows intentional, strategic use — supporting \"socially strategic\" and contradicting \"linguistic confusion.\"<br><br><strong>(B)</strong> Monolingual children adjusting register is a parallel phenomenon but doesn't directly prove bilingual code-switching is strategic. <em>(Analogous but indirect)</em><br><strong>(C)</strong> Being at grade level shows competence but doesn't prove switching is strategic rather than habitual. <em>(Relevant but indirect)</em><br><strong>(D)</strong> Age differences between studies explain methodological divergence but don't test the strategic interpretation. <em>(Doesn't test the claim)</em>"
  },
  {
    id: 32,
    passage: "Paleontologist Luis Garza has argued that the massive sauropod dinosaurs of the Jurassic period were endothermic (warm-blooded) rather than ectothermic (cold-blooded), based on evidence that their bone growth patterns resemble those of modern endothermic mammals more closely than those of modern ectothermic reptiles.",
    question: "Which finding, if true, would most directly weaken Garza's argument?",
    choices: [
      "Recent studies show that some modern ectothermic reptiles, such as certain large monitors, can produce bone growth patterns indistinguishable from those of endothermic mammals.",
      "The largest modern endothermic mammals, such as elephants, are significantly smaller than the largest known sauropods.",
      "Fossil evidence suggests that some Jurassic sauropods lived in environments with relatively stable, warm temperatures.",
      "Computer models indicate that very large animals can maintain stable body temperatures through thermal inertia regardless of whether they are endothermic."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Garza's argument: sauropod bone growth patterns resemble endotherms → sauropods were endothermic. If ectotherms CAN produce the same bone patterns, the bone evidence no longer distinguishes between the two — the argument's foundation collapses.<br><br><strong>(B)</strong> Size difference between modern mammals and sauropods doesn't address the bone pattern evidence. <em>(Irrelevant)</em><br><strong>(C)</strong> Warm, stable environments could actually explain how ectotherms could survive at large sizes, but this is an alternative theory rather than a direct challenge to the bone evidence. <em>(Less direct)</em><br><strong>(D)</strong> Thermal inertia is an alternative explanation for temperature stability but doesn't address the specific bone pattern evidence Garza uses. <em>(Parallel argument, doesn't weaken the bone evidence)</em>"
  },
  {
    id: 33,
    passage: "Sociologist Hannah Park's research found that neighborhoods with more independent bookstores per capita had significantly lower crime rates than comparable neighborhoods without bookstores. Park concluded that independent bookstores serve as community anchors that foster social cohesion, which in turn reduces crime.",
    question: "Which finding, if true, would most directly weaken Park's conclusion about the causal mechanism?",
    choices: [
      "Independent bookstores are far more likely to open and survive in neighborhoods that already have low crime rates and high social cohesion.",
      "Neighborhoods with more independent bookstores also tend to have more restaurants, cafes, and other small businesses.",
      "Crime rates in neighborhoods with large chain bookstores were not significantly different from those in neighborhoods with independent bookstores.",
      "Independent bookstore owners surveyed in the study reported hosting an average of four community events per month."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Park claims: bookstores → social cohesion → less crime. If bookstores only OPEN in already-safe, cohesive neighborhoods, the causation is reversed — low crime enables bookstores, not the other way around. This is reverse causation.<br><br><strong>(B)</strong> More businesses generally doesn't address whether bookstores specifically drive cohesion — it could suggest general economic health matters, but is less directly undermining. <em>(Alternative explanation, less direct)</em><br><strong>(C)</strong> Chain bookstores having similar effects might actually support the general claim about bookstores and community. <em>(Neutral or slightly strengthens)</em><br><strong>(D)</strong> Community events support the social cohesion mechanism. <em>(Strengthens)</em>"
  },
  {
    id: 34,
    passage: "Psychologist Tomoko Arai studied the effects of background music on reading comprehension in college students. In her experiment, participants who read academic articles while listening to instrumental music scored 15% higher on comprehension questions than participants who read in silence. Arai concluded that instrumental music enhances the cognitive processes involved in reading comprehension.",
    question: "Which finding, if true, would most directly weaken Arai's conclusion?",
    choices: [
      "Participants in the music condition reported feeling less anxious during the task, and reduced anxiety has been independently shown to improve test performance regardless of cognitive enhancement.",
      "Participants who listened to music with lyrics scored lower than both the instrumental music group and the silent group.",
      "The instrumental music used in the study was selected by the researchers rather than by the participants themselves.",
      "A follow-up study found that the comprehension advantage for the music group was even larger when the articles were on unfamiliar topics."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Arai claims music enhances COGNITIVE PROCESSES of reading. If the real mechanism is anxiety reduction (an emotional/affective pathway, not a cognitive one), then music improves scores WITHOUT actually enhancing cognition — the causal mechanism is wrong even though the effect is real.<br><br><strong>(B)</strong> Lyrics hurting performance is consistent with the idea that verbal interference disrupts reading, which supports a cognitive framework. <em>(Neutral/supports)</em><br><strong>(C)</strong> Who selected the music is a methodological detail that doesn't challenge the cognitive enhancement claim. <em>(Irrelevant to mechanism)</em><br><strong>(D)</strong> A larger effect on unfamiliar topics would suggest music helps with difficult processing — strengthening the claim. <em>(Strengthens)</em>"
  },

  // ============================================================
  // SECTION 3: LOGICAL TRANSITIONS (Q35–50)
  // Weakness: Student confused "By contrast" (opposition) with
  // "As such" (cause/consequence). Needs practice distinguishing:
  // - Cause/effect: As such, Consequently, Therefore, Thus
  // - Contrast: However, By contrast, Nevertheless, Conversely
  // - Continuation: Moreover, Furthermore, Indeed, In addition
  // - Example: For example, For instance, Specifically
  // Strategy: Present pairs where the wrong answer is a plausible
  // but logically incorrect transition.
  // ============================================================
  {
    id: 35,
    passage: "Sociologist David Park's research demonstrates that neighborhoods with robust public transit access tend to have lower rates of social isolation among elderly residents. Elderly people in these areas can more easily visit friends, attend community events, and access healthcare without depending on family members for transportation. ______ Park advocates for increased investment in public transit as a public health intervention for aging populations.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["Accordingly,", "By contrast,", "For instance,", "Granted,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (Accordingly)</strong><br><br>The first sentences establish evidence (transit reduces isolation). The final sentence presents a recommendation BASED ON that evidence. \"Accordingly\" signals a logical consequence or response to prior information.<br><br><strong>(B) By contrast</strong> signals opposition, but the recommendation follows from the evidence, not against it. <em>(Wrong relationship)</em><br><strong>(C) For instance</strong> introduces an example, but advocacy is a conclusion, not an illustration. <em>(Wrong function)</em><br><strong>(D) Granted</strong> concedes a point before a counterargument — but no counterargument follows. <em>(Wrong function)</em>"
  },
  {
    id: 36,
    passage: "Historian Maya Chen has documented that medieval Venetian glassmakers developed techniques of extraordinary sophistication, producing works rivaling anything created in the modern era. ______ their innovations in color chemistry and optical clarity were not the product of systematic scientific experimentation but of generations of empirical trial and error, passed down through closely guarded guild traditions.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["However,", "Therefore,", "Similarly,", "In addition,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (However)</strong><br><br>The first sentence establishes extraordinary sophistication. The second sentence reveals a surprising source — NOT systematic science but trial and error. This is an unexpected contrast (sophistication suggests formal method, but reality was informal).<br><br><strong>(B) Therefore</strong> implies the second sentence follows logically from the first, but the informal method is surprising, not expected. <em>(Wrong relationship)</em><br><strong>(C) Similarly</strong> adds a parallel point, but the method being informal contrasts with the implication of sophistication. <em>(Wrong relationship)</em><br><strong>(D) In addition</strong> adds more information of the same type, but the second point qualifies/complicates the first. <em>(Misses the contrast)</em>"
  },
  {
    id: 37,
    passage: "Entomologist Rosa Martinez found that the Asian giant hornet, an invasive species in the Pacific Northwest, destroys honeybee colonies by decapitating worker bees and feeding the thoraxes to its own larvae. Native Japanese honeybees have evolved a remarkable defense: they swarm an invading hornet and vibrate their flight muscles to generate lethal heat. ______ European honeybees, the predominant species in North American apiaries, lack this defensive behavior and are largely defenseless against the hornets.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["In contrast,", "As a result,", "For example,", "In other words,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (In contrast)</strong><br><br>Japanese bees HAVE a defense; European bees LACK it. This is a direct opposition between two groups.<br><br><strong>(B) As a result</strong> implies the European bees' vulnerability is a consequence of the Japanese bees' defense, which makes no sense. <em>(Wrong causal link)</em><br><strong>(C) For example</strong> would introduce European bees as an instance of the defense behavior, but they actually lack it. <em>(Opposite)</em><br><strong>(D) In other words</strong> restates the same idea differently, but the European bee information is a new, contrasting point. <em>(Wrong function)</em>"
  },
  {
    id: 38,
    passage: "Economist Priya Sharma's analysis of wage data from 2010 to 2020 revealed that the gender pay gap narrowed significantly in industries that adopted transparent salary reporting policies. In the technology sector, where many firms began publishing salary bands during this period, the gap decreased by 12 percentage points. ______ in the financial services sector, which largely resisted transparency measures, the gap remained virtually unchanged.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["Conversely,", "Consequently,", "Specifically,", "Furthermore,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (Conversely)</strong><br><br>Technology (adopted transparency → gap decreased) vs. financial services (resisted transparency → gap unchanged). These are opposite conditions with opposite outcomes — a direct contrast.<br><br><strong>(B) Consequently</strong> implies the financial sector result follows from the tech sector result, but they're independent. <em>(Wrong relationship)</em><br><strong>(C) Specifically</strong> narrows a general point, but this is a contrasting case, not a specific example of the same trend. <em>(Wrong function)</em><br><strong>(D) Furthermore</strong> adds supporting evidence in the same direction, but the financial sector is a counter-case. <em>(Wrong direction)</em>"
  },
  {
    id: 39,
    passage: "Architect Luisa Fernandez designed the new community library to maximize natural light, reducing energy costs and creating a more pleasant reading environment. The building's south-facing facade features floor-to-ceiling windows, and interior partitions are made of translucent glass to allow light to penetrate deep into the structure. ______ a series of automated louvers adjusts throughout the day to prevent glare on reading surfaces while maintaining ambient brightness.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["Additionally,", "Nevertheless,", "Conversely,", "As such,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (Additionally)</strong><br><br>The passage lists light-maximizing features (south-facing windows, translucent partitions) and then adds another complementary feature (automated louvers). This is adding more information in the same direction.<br><br><strong>(B) Nevertheless</strong> signals concession or contrast, but louvers are a complementary feature, not a contradicting one. <em>(Wrong relationship)</em><br><strong>(C) Conversely</strong> signals opposition, but the louver system supports the same light-management goal. <em>(Wrong relationship)</em><br><strong>(D) As such</strong> signals a consequence, but the louvers are an additional feature, not a result of the windows. <em>(Wrong relationship)</em>"
  },
  {
    id: 40,
    passage: "Neuroscientist James Okafor's research has shown that chronic sleep deprivation reduces the brain's ability to flush out beta-amyloid proteins, which accumulate in the neural tissue of patients with Alzheimer's disease. ______ Okafor cautions that this correlation does not yet prove that poor sleep causes Alzheimer's — it is equally possible that early, undetected Alzheimer's pathology disrupts sleep quality.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["That said,", "Therefore,", "Indeed,", "Specifically,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (That said)</strong><br><br>The first sentence presents a compelling link (sleep deprivation → amyloid buildup). The second sentence introduces a qualification (correlation ≠ causation; reverse causation possible). \"That said\" acknowledges the prior point while introducing a caveat.<br><br><strong>(B) Therefore</strong> would draw a conclusion from the evidence, but the second sentence qualifies rather than concludes. <em>(Opposite direction)</em><br><strong>(C) Indeed</strong> reinforces or intensifies the prior point, but the second sentence limits it. <em>(Wrong function)</em><br><strong>(D) Specifically</strong> narrows a general point, but the second sentence broadens the interpretive frame. <em>(Wrong function)</em>"
  },
  {
    id: 41,
    passage: "Art historian Rebecca Liang's analysis of Qing dynasty landscape paintings reveals that artists frequently depicted scenes that never existed in nature — combining mountain formations from different regions, imaginary waterfalls, and idealized vegetation. These paintings were not intended as topographical records. ______ they functioned as philosophical statements about the relationship between humanity and the natural world.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["Rather,", "Meanwhile,", "Regardless,", "Similarly,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (Rather)</strong><br><br>\"Not intended as X... Rather, they functioned as Y.\" The passage replaces one interpretation (topographical records) with a different one (philosophical statements). \"Rather\" introduces the correct alternative after negating the first.<br><br><strong>(B) Meanwhile</strong> signals simultaneous events — wrong for an interpretive replacement. <em>(Wrong function)</em><br><strong>(C) Regardless</strong> dismisses a prior consideration, but the prior point is integral to understanding the contrast. <em>(Wrong relationship)</em><br><strong>(D) Similarly</strong> draws a parallel, but the second sentence presents a contrasting purpose. <em>(Wrong direction)</em>"
  },
  {
    id: 42,
    passage: "Professor Elena Vasquez has shown that coral reefs in marine protected areas recover from bleaching events approximately twice as fast as reefs in unprotected waters. Vasquez attributes this to the higher fish biodiversity in protected areas — herbivorous fish species keep algae growth in check, preventing algae from smothering weakened coral. ______ Vasquez's findings suggest that fishing restrictions may be as important as carbon emission reductions in ensuring coral reef survival.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["Thus,", "Nonetheless,", "For instance,", "Alternatively,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (Thus)</strong><br><br>The evidence (protected reefs recover faster due to fish biodiversity) leads to a conclusion (fishing restrictions are important for reef survival). \"Thus\" signals a logical conclusion derived from the preceding evidence.<br><br><strong>(B) Nonetheless</strong> signals concession — but the final sentence agrees with, not contradicts, the evidence. <em>(Wrong relationship)</em><br><strong>(C) For instance</strong> introduces an example, but the final sentence is a conclusion, not an illustration. <em>(Wrong function)</em><br><strong>(D) Alternatively</strong> presents a different option, but the sentence follows FROM the evidence rather than offering a separate path. <em>(Wrong function)</em>"
  },
  {
    id: 43,
    passage: "Architect Daniel Kwame's designs for affordable housing have won praise for their innovative use of cross-laminated timber, which is both cheaper and more sustainable than steel or concrete. ______ his firm's most recent project, a 200-unit complex in Detroit, was constructed in 14 months — roughly half the time required for a comparable concrete structure — and at 30% lower cost.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["Indeed,", "Nevertheless,", "In contrast,", "Alternatively,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (Indeed)</strong><br><br>The first sentence claims timber is cheaper and faster. The second sentence provides a specific, impressive example that reinforces those claims. \"Indeed\" intensifies or confirms a preceding statement with stronger evidence.<br><br><strong>(B) Nevertheless</strong> introduces a contrasting or conceding point — but the Detroit project supports the claim. <em>(Wrong direction)</em><br><strong>(C) In contrast</strong> signals opposition, but this is a supporting example. <em>(Wrong relationship)</em><br><strong>(D) Alternatively</strong> presents a different option — inapplicable here. <em>(Wrong function)</em>"
  },
  {
    id: 44,
    passage: "Psychologist Yuki Tanaka's study found that participants who wrote about gratitude for ten minutes each morning reported significantly lower stress levels after eight weeks compared to a control group. Tanaka noted that the gratitude group also showed measurable decreases in cortisol, a hormone associated with stress. ______ participants in the control group, who wrote about neutral daily activities, showed no significant changes in either self-reported stress or cortisol levels.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["By comparison,", "Consequently,", "For this reason,", "In other words,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (By comparison)</strong><br><br>The passage moves from the gratitude group's results (improved) to the control group's results (unchanged). This is a comparison between two groups.<br><br><strong>(B) Consequently</strong> implies the control group's result is a consequence of the gratitude group's result — nonsensical. <em>(Wrong relationship)</em><br><strong>(C) For this reason</strong> implies the control group's stasis was caused by the gratitude group's improvement — also nonsensical. <em>(Wrong relationship)</em><br><strong>(D) In other words</strong> rephrases the same idea, but the control group data is new information about a different group. <em>(Wrong function)</em>"
  },
  {
    id: 45,
    passage: "Economist Elinor Ostrom's studies of communities around the world have empirically demonstrated that common pool resources, such as grazing lands, can be sustainably managed by the people who use them (rather than through private entities or centralized governments). ______ Ostrom's work is a repudiation of the \"tragedy of the commons,\" the view that individuals will inevitably overexploit a finite shared resource if given unfettered access to it.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["As such,", "By contrast,", "For example,", "That said,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (As such)</strong><br><br>Ostrom proved communities CAN manage shared resources sustainably. The \"tragedy of the commons\" says they CAN'T. Because her work proves sustainable management is possible, it follows AS A CONSEQUENCE that her work repudiates the tragedy of the commons.<br><br><strong>(B) By contrast</strong> sets up a comparison between two different subjects, but this sentence draws a consequence about the same body of work. <em>(Wrong relationship)</em><br><strong>(C) For example</strong> introduces an illustration, but \"repudiation of the tragedy of the commons\" is a conclusion, not an example. <em>(Wrong function)</em><br><strong>(D) That said</strong> introduces a qualification or caveat, but the second sentence follows logically from the first with no concession. <em>(Wrong function)</em>"
  },
  {
    id: 46,
    passage: "Novelist Toni Morrison deliberately avoided providing detailed physical descriptions of her characters in several of her most celebrated works. Morrison argued that physical appearance was less important than the interior psychological landscape she sought to render. ______ she believed that sparse physical description invited readers to project their own assumptions onto characters, thereby revealing the readers' own biases.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["Moreover,", "However,", "In contrast,", "Consequently,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (Moreover)</strong><br><br>Morrison gives one reason (interior landscape matters more), then adds a second, complementary reason (sparse description reveals reader bias). Both reasons support the same choice. \"Moreover\" adds a further supporting point.<br><br><strong>(B) However</strong> would introduce a contradiction — but both reasons support the same artistic decision. <em>(Wrong relationship)</em><br><strong>(C) In contrast</strong> signals opposition between two things, but the second reason complements the first. <em>(Wrong relationship)</em><br><strong>(D) Consequently</strong> implies the second reason is a result of the first, but they are independent, parallel justifications. <em>(Wrong relationship)</em>"
  },
  {
    id: 47,
    passage: "Geologist Sarah Nakamura's study of sediment cores from Lake Baikal in Siberia revealed layers of volcanic ash that closely match the chemical signature of a massive eruption in Kamchatka approximately 7,600 years ago. The ash layer was found at a depth consistent with that time period based on established sedimentation rates. ______ Nakamura concluded that the Kamchatka eruption deposited ash across a far greater geographic range than previously estimated.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["On this basis,", "Nonetheless,", "By contrast,", "Incidentally,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (On this basis)</strong><br><br>Two pieces of evidence (chemical match + correct depth) together support Nakamura's conclusion about geographic range. \"On this basis\" signals that the conclusion is drawn FROM the preceding evidence.<br><br><strong>(B) Nonetheless</strong> introduces a concession or surprise — but the conclusion follows naturally from the evidence. <em>(Wrong tone)</em><br><strong>(C) By contrast</strong> signals opposition — inapplicable. <em>(Wrong relationship)</em><br><strong>(D) Incidentally</strong> signals a tangential aside — but the conclusion is the main point. <em>(Wrong function)</em>"
  },
  {
    id: 48,
    passage: "Urban ecologist Marcus Rivera has documented that green roofs — rooftops covered with vegetation — in Chicago reduce stormwater runoff by absorbing up to 75% of rainfall during moderate storms. ______ green roofs lower indoor temperatures by several degrees in summer, reducing air conditioning costs for building occupants by an estimated 20%.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["In addition,", "In contrast,", "As a result,", "On the other hand,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (In addition)</strong><br><br>The passage lists two independent benefits of green roofs: (1) stormwater absorption and (2) temperature reduction. These are separate advantages, not causally linked. \"In addition\" adds a second benefit.<br><br><strong>(B) In contrast</strong> signals opposition — but both points are benefits. <em>(Wrong relationship)</em><br><strong>(C) As a result</strong> implies temperature reduction is caused by stormwater absorption — these are separate mechanisms. <em>(False causal link)</em><br><strong>(D) On the other hand</strong> introduces a counterpoint or opposing perspective — both are positives. <em>(Wrong relationship)</em>"
  },
  {
    id: 49,
    passage: "Dr. Lena Park's research team discovered that a particular gene variant found in approximately 15% of Northern Europeans appears to provide increased resistance to certain bacterial infections. ______ this same gene variant has been associated with a modestly elevated risk of autoimmune disorders, suggesting that the genetic mutation involves a trade-off between enhanced pathogen defense and increased susceptibility to immune system malfunction.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["However,", "Therefore,", "In other words,", "For instance,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (However)</strong><br><br>Benefit (infection resistance) followed by a drawback (autoimmune risk) — a trade-off. \"However\" signals the unexpected or contrasting negative aspect of something previously presented as positive.<br><br><strong>(B) Therefore</strong> implies the autoimmune risk follows logically from the infection resistance — but trade-offs are surprising, not logical consequences. <em>(Wrong relationship)</em><br><strong>(C) In other words</strong> restates the same point differently — but autoimmune risk is new, contrasting information. <em>(Wrong function)</em><br><strong>(D) For instance</strong> introduces an example — but autoimmune risk isn't an example of infection resistance. <em>(Wrong function)</em>"
  },
  {
    id: 50,
    passage: "Philosopher Martha Nussbaum has argued that a strong liberal arts education — including literature, philosophy, and history — is essential for cultivating the empathetic imagination that democratic citizenship requires. Without exposure to narratives that depict the inner lives of people from vastly different circumstances, Nussbaum contends, citizens cannot adequately understand the perspectives of their fellow community members. ______ Nussbaum maintains that defunding humanities programs in public universities does not merely reduce educational breadth but actively undermines the foundations of democratic society.",
    question: "Which choice completes the text with the most logical transition?",
    choices: ["On that account,", "In contrast,", "For example,", "Granted,"],
    correct: 0,
    explanation: "<strong>Correct Answer: A (On that account)</strong><br><br>Nussbaum's argument: liberal arts → empathy → democratic citizenship. Therefore, cutting humanities → undermines democracy. The final sentence is a direct consequence of the reasoning chain. \"On that account\" means \"for that reason\" — signaling a conclusion drawn from the preceding argument.<br><br><strong>(B) In contrast</strong> signals opposition, but the final sentence extends the argument. <em>(Wrong relationship)</em><br><strong>(C) For example</strong> introduces an illustration, but this is a broader conclusion, not a specific case. <em>(Wrong function)</em><br><strong>(D) Granted</strong> concedes a point before countering, but no counterargument follows. <em>(Wrong function)</em>"
  }
];
