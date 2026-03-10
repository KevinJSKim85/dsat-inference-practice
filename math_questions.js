const mathQuestions = [
  {
    "id": 1,
    "passage": "What is the circumference of a circle whose area is π<sup>3</sup>?",
    "imageUrl": null,
    "question": "What is the circumference of a circle whose area is π<sup>3</sup>?",
    "choices": [
      "π",
      "2π",
      "π<sup>2</sup>",
      "2π<sup>2</sup>"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use circle formulas A = πr<sup>2</sup> and C = 2πr. First solve for r from the area, then plug into circumference.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> πr<sup>2</sup> = π<sup>3</sup>, so r<sup>2</sup> = π<sup>2</sup>.</p><p><strong>Step 2:</strong> r = π (radius is positive).</p><p><strong>Step 3:</strong> C = 2π(π) = 2π<sup>2</sup>.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> π ignores the solved radius r = π.</p><p><strong>(B)</strong> 2π would require r = 1, not π.</p><p><strong>(C)</strong> π<sup>2</sup> is missing the factor 2.</p><p><strong>(D)</strong> 2π<sup>2</sup> matches the full computation.</p>"
  },
  {
    "id": 2,
    "passage": "Question below refers to the following figure. <img src=\"https://images.cracksat.net/digital/br22/f0523-01.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0523-01.jpg",
    "question": "What is the area of the shaded sector?",
    "choices": [
      "4π",
      "8π",
      "20π",
      "40π"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Sector area uses the central-angle fraction of the full circle, or Area = (1/2)rL with arc length L. The figure provides the needed measurements.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Read the shaded sector’s central angle and radius from the diagram.</p><p><strong>Step 2:</strong> Apply sector area formula using those values.</p><p><strong>Step 3:</strong> The computed shaded area is 40π square units.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 4π is too small for the shown sector fraction.</p><p><strong>(B)</strong> 8π is still below the computed area.</p><p><strong>(C)</strong> 20π is exactly half the needed result.</p><p><strong>(D)</strong> 40π matches the figure-based calculation.</p>"
  },
  {
    "id": 3,
    "passage": "If <i>c</i> ≠ 0 and the slope of the line passing through (-<i>c, c</i>) and (3<i>c, a</i>) is 1, which of the following is an expression for <i>a</i> in terms of <i>c</i>?",
    "imageUrl": null,
    "question": "If <i>c</i> ≠ 0 and the slope of the line passing through (-<i>c, c</i>) and (3<i>c, a</i>) is 1, which of the following is an expression for <i>a</i> in terms of <i>c</i>?",
    "choices": [
      "-3<i>c</i>",
      "2<i>c</i>",
      "3<i>c</i>",
      "5<i>c</i>"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use slope formula m = (y2 − y1)/(x2 − x1), then set it equal to 1 and solve for a.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> m = (a − c)/(3c − (−c)) = (a − c)/(4c).</p><p><strong>Step 2:</strong> Given m = 1, so (a − c)/(4c) = 1.</p><p><strong>Step 3:</strong> a − c = 4c, so a = 5c.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> a = −3c gives slope −1, not 1.</p><p><strong>(B)</strong> a = 2c gives slope 1/4.</p><p><strong>(C)</strong> a = 3c gives slope 1/2.</p><p><strong>(D)</strong> a = 5c gives slope exactly 1.</p>"
  },
  {
    "id": 4,
    "passage": "What is the area of a circle whose circumference is π<sup>2</sup>?",
    "imageUrl": null,
    "question": "What is the area of a circle whose circumference is π<sup>2</sup>?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/e0523-01.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0523-02.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0523-03.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0523-04.jpg\">"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Find radius from circumference first: C = 2πr. Then area is A = πr<sup>2</sup>.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> 2πr = π<sup>2</sup>, so r = π/2.</p><p><strong>Step 2:</strong> r<sup>2</sup> = π<sup>2</sup>/4.</p><p><strong>Step 3:</strong> A = π·(π<sup>2</sup>/4) = π<sup>3</sup>/4.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> This image is not π<sup>3</sup>/4.</p><p><strong>(B)</strong> Comes from incorrect radius handling.</p><p><strong>(C)</strong> This image matches π<sup>3</sup>/4.</p><p><strong>(D)</strong> Overestimates area by using a larger r.</p>"
  },
  {
    "id": 5,
    "passage": "What is the area of a circle that is inscribed in a square of area 2?",
    "imageUrl": null,
    "question": "What is the area of a circle that is inscribed in a square of area 2?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/pi_2.jpg\">",
      "π",
      "π<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "2π"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>For a circle inscribed in a square, diameter equals square side. Use square area to get side length, then circle area.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Square area 2 means side s = √2.</p><p><strong>Step 2:</strong> Circle diameter d = √2, so r = √2/2.</p><p><strong>Step 3:</strong> Area = π(√2/2)<sup>2</sup> = π/2.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> This image is π/2, correct.</p><p><strong>(B)</strong> π would require r = 1.</p><p><strong>(C)</strong> This radical form is not π/2.</p><p><strong>(D)</strong> 2π is four times too large.</p>"
  },
  {
    "id": 6,
    "passage": "A square of area 2 is inscribed in a circle. What is the area of the circle?",
    "imageUrl": null,
    "question": "A square of area 2 is inscribed in a circle. What is the area of the circle?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/pi_2.jpg\">",
      "π",
      "π<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "2π"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>For a square inscribed in a circle, square diagonal is circle diameter.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Square area 2 gives side √2.</p><p><strong>Step 2:</strong> Diagonal = √2·√2 = 2, so circle diameter is 2.</p><p><strong>Step 3:</strong> Radius is 1, so area = π(1)<sup>2</sup> = π.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> π/2 uses wrong diameter relationship.</p><p><strong>(B)</strong> π is exactly correct for r = 1.</p><p><strong>(C)</strong> Does not equal π for this setup.</p><p><strong>(D)</strong> 2π would need r = √2.</p>"
  },
  {
    "id": 7,
    "passage": "What is the equation of the line that crosses the <i>y</i>-axis at (0, 5) and crosses the <i>x</i>-axis at (5, 0)?",
    "imageUrl": null,
    "question": "What is the equation of the line that crosses the <i>y</i>-axis at (0, 5) and crosses the <i>x</i>-axis at (5, 0)?",
    "choices": [
      "<i>x</i> = 5",
      "<i>y</i> = 5",
      "<i>y</i> = <i>x</i> - 5",
      "<i>y</i> = -<i>x</i> + 5"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Find slope from two intercept points, then use slope-intercept form y = mx + b.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Through (0,5) and (5,0), slope m = (0−5)/(5−0) = −1.</p><p><strong>Step 2:</strong> y-intercept is 5, so b = 5.</p><p><strong>Step 3:</strong> Equation is y = −x + 5.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> x = 5 is vertical, wrong line.</p><p><strong>(B)</strong> y = 5 is horizontal, wrong line.</p><p><strong>(C)</strong> y = x − 5 has slope +1.</p><p><strong>(D)</strong> y = −x + 5 fits both points.</p>"
  },
  {
    "id": 8,
    "passage": "What is the area of a circle whose radius is the diagonal of a square whose area is 4?",
    "imageUrl": null,
    "question": "What is the area of a circle whose radius is the diagonal of a square whose area is 4?",
    "choices": [
      "2π",
      "4π",
      "8π",
      "16π"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use square area to get side, then diagonal. Here the diagonal is the circle radius.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Square area 4 gives side 2.</p><p><strong>Step 2:</strong> Diagonal is 2√2, so r = 2√2.</p><p><strong>Step 3:</strong> Area = π(2√2)<sup>2</sup> = 8π.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 2π is too small.</p><p><strong>(B)</strong> 4π uses r = 2 incorrectly.</p><p><strong>(C)</strong> 8π matches r = 2√2.</p><p><strong>(D)</strong> 16π is too large for this radius.</p>"
  },
  {
    "id": 9,
    "passage": "If <i>A</i> is the area and <i>C</i> the circumference of a circle, which of the following is an expression for <i>A</i> in terms of <i>C</i>?",
    "imageUrl": null,
    "question": "If <i>A</i> is the area and <i>C</i> the circumference of a circle, which of the following is an expression for <i>A</i> in terms of <i>C</i>?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/e0523-05.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0523-06.jpg\">",
      "2<i>C</i><img src=\"https://images.cracksat.net/digital/br22/root_pi.jpg\">",
      "2<i>C</i><sup>2</sup><img src=\"https://images.cracksat.net/digital/br22/root_pi.jpg\">"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Express area A in terms of circumference C by eliminating r using C = 2πr.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> r = C/(2π).</p><p><strong>Step 2:</strong> A = π(C/(2π))<sup>2</sup>.</p><p><strong>Step 3:</strong> Simplify to A = C<sup>2</sup>/(4π).</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> This image is C<sup>2</sup>/(4π), correct.</p><p><strong>(B)</strong> π is placed incorrectly.</p><p><strong>(C)</strong> Linear in C is impossible for area.</p><p><strong>(D)</strong> Wrong power/scale in C and π.</p>"
  },
  {
    "id": 10,
    "passage": "Question below refers to the following figure. <img src=\"https://images.cracksat.net/digital/br22/f0523-01.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0523-01.jpg",
    "question": "What is the length of arc <i>RS</i>?",
    "choices": [
      "4π",
      "8π",
      "20π",
      "40π"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Arc length is a fraction of the full circumference: L = (θ/360)·2πr.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Use the central angle and radius shown for arc RS.</p><p><strong>Step 2:</strong> Multiply the angle fraction by full circumference.</p><p><strong>Step 3:</strong> The arc length evaluates to 8π.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 4π is half the needed arc.</p><p><strong>(B)</strong> 8π matches the computed arc length.</p><p><strong>(C)</strong> 20π is too large for the shown arc.</p><p><strong>(D)</strong> 40π is far beyond this arc’s measure.</p>"
  },
  {
    "id": 11,
    "passage": "<span>$0.8p=t$</span>",
    "imageUrl": null,
    "question": "At a store, a coat originally priced at <span>$p$</span><span>$t$</span><span>$p$</span><span>$t$</span><span>$p$</span><span>$t$</span>",
    "choices": [
      "<span>$p=t-0.8$</span>",
      "<span>$p=0.8t$</span>",
      "<span>$p=\\frac{0.8}{t}$</span>",
      "<span>$p=\\frac{t}{0.8}$</span>"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>To solve for p in 0.8p = t, divide both sides by 0.8.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Start with 0.8p = t.</p><p><strong>Step 2:</strong> Divide by 0.8: p = t/0.8.</p><p><strong>Step 3:</strong> Check with t = 40 gives p = 50, and 0.8·50 = 40.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Subtracting 0.8 is not inverse of multiplying by 0.8.</p><p><strong>(B)</strong> 0.8t multiplies instead of divides.</p><p><strong>(C)</strong> 0.8/t inverts variables incorrectly.</p><p><strong>(D)</strong> t/0.8 is the correct rearrangement.</p>"
  },
  {
    "id": 12,
    "passage": "<img src=\"https://images.cracksat.net/digital/br22/f0524-01.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0524-01.jpg",
    "question": "In the figure above, ℓ is tangent to circle <i>O</i> at <i>A</i>, and <i>OA</i> = <i>AB</i> = 2. What is the area of the shaded region?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/common14.jpg\">π",
      "4 - <img src=\"https://images.cracksat.net/digital/br22/common14.jpg\">π",
      "2 - <img src=\"https://images.cracksat.net/digital/br22/common14.jpg\">π",
      "2 - π"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Radius to tangent is perpendicular. Shaded area = area of right triangle OAB − area of sector AOB.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> OA ⟂ AB and OA = AB = 2, so triangle OAB area is (1/2)(2)(2)=2.</p><p><strong>Step 2:</strong> Triangle is isosceles right, so angle AOB = 45°.</p><p><strong>Step 3:</strong> Sector area is (45/360)·π·2<sup>2</sup> = π/2. Shaded = 2 − π/2.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Pure π-term ignores triangle part.</p><p><strong>(B)</strong> Uses triangle area 4 instead of 2.</p><p><strong>(C)</strong> 2 − π/2 matches exact subtraction.</p><p><strong>(D)</strong> 2 − π subtracts too much sector area.</p>"
  },
  {
    "id": 13,
    "passage": "If the height of a cylinder is 4 times its circumference, what is the volume of the cylinder in terms of its circumference, <i>C</i>?",
    "imageUrl": null,
    "question": "If the height of a cylinder is 4 times its circumference, what is the volume of the cylinder in terms of its circumference, <i>C</i>?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/e0535-04.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0535-05.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0535-06.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0535-07.jpg\">"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Cylinder volume V = πr<sup>2</sup>h. Convert r and h into C using C = 2πr and h = 4C.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> h = 4C.</p><p><strong>Step 2:</strong> r = C/(2π).</p><p><strong>Step 3:</strong> V = π(C/(2π))<sup>2</sup>(4C) = C<sup>3</sup>/π.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> This image matches C<sup>3</sup>/π.</p><p><strong>(B)</strong> Uses wrong π placement.</p><p><strong>(C)</strong> Has incorrect power of C.</p><p><strong>(D)</strong> Mis-simplifies constants from substitution.</p>"
  },
  {
    "id": 14,
    "passage": "What is the volume of a pyramid whose base is a square of area 36 and whose four faces are equilateral triangles?",
    "imageUrl": null,
    "question": "What is the volume of a pyramid whose base is a square of area 36 and whose four faces are equilateral triangles?",
    "choices": [
      "36",
      "36<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "108",
      "108<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Pyramid volume is (1/3)Bh. Base is square area 36, and equilateral side faces let us solve height using a right triangle.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Base side is 6. Slant edge from apex to a base vertex is also 6 (equilateral faces).</p><p><strong>Step 2:</strong> Center-to-vertex distance is half diagonal: 3√2.</p><p><strong>Step 3:</strong> h = √(6<sup>2</sup> − (3√2)<sup>2</sup>) = 3√2. Volume = (1/3)(36)(3√2)=36√2.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Omits height factor.</p><p><strong>(B)</strong> 36√2 is the exact volume.</p><p><strong>(C)</strong> Misses the divide-by-3 in pyramid formula.</p><p><strong>(D)</strong> Triple the correct value.</p>"
  },
  {
    "id": 15,
    "passage": "Which expression is equivalent to <span>$2x^{2}+3x-2-5x^{2}-x-7$</span>",
    "imageUrl": null,
    "question": "Which expression is equivalent to <span>$2x^{2}+3x-2-5x^{2}-x-7$</span>",
    "choices": [
      "<span>$7x^{2}+4x+9$</span>",
      "<span>$3x^{2}+4x+5$</span>",
      "<span>$-3x^{2}+2x-9$</span>",
      "<span>$-3x^{2}+4x+5$</span>"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Combine like terms carefully, including signs.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Quadratics: 2x<sup>2</sup> − 5x<sup>2</sup> = −3x<sup>2</sup>.</p><p><strong>Step 2:</strong> Linear terms: 3x − (−x) = 4x.</p><p><strong>Step 3:</strong> Constants: −2 − (−7) = 5. Result: −3x<sup>2</sup> + 4x + 5.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Wrong signs and coefficients.</p><p><strong>(B)</strong> x<sup>2</sup> sign should be negative.</p><p><strong>(C)</strong> Uses incorrect linear and constant simplification.</p><p><strong>(D)</strong> Matches term-by-term combination.</p>"
  },
  {
    "id": 16,
    "passage": "What is the slope of the line that passes through (3, 2) and is perpendicular to the line that passes through (-2, 3) and (2, -3)?",
    "imageUrl": null,
    "question": "What is the slope of the line that passes through (3, 2) and is perpendicular to the line that passes through (-2, 3) and (2, -3)?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/e0553-04.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0553-05.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/common15.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/common16.jpg\">"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Perpendicular slopes are negative reciprocals.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Slope through (−2,3) and (2,−3) is (−3−3)/(2−(−2)) = −6/4 = −3/2.</p><p><strong>Step 2:</strong> Perpendicular slope is 2/3.</p><p><strong>Step 3:</strong> The point (3,2) is for line equation, not slope value.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Keeps original slope, not perpendicular.</p><p><strong>(B)</strong> Sign/reciprocal applied incorrectly.</p><p><strong>(C)</strong> This image is 2/3, correct.</p><p><strong>(D)</strong> Not the negative reciprocal of −3/2.</p>"
  },
  {
    "id": 17,
    "passage": "What is the slope of the line that passes through (<i>a, b</i>) and <img src=\"https://images.cracksat.net/digital/br22/e0553-01.jpg\">?",
    "imageUrl": "https://images.cracksat.net/digital/br22/e0553-01.jpg",
    "question": "What is the slope of the line that passes through (<i>a, b</i>) and <img src=\"https://images.cracksat.net/digital/br22/e0553-01.jpg\">?",
    "choices": [
      "0",
      "<img src=\"https://images.cracksat.net/digital/br22/e0553-02.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0553-03.jpg\">",
      "Undefined"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Slope is Δy/Δx. If y-values are equal, slope is 0 (horizontal line).</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> One point is (a,b), and the second point shown has the same y-coordinate b.</p><p><strong>Step 2:</strong> So Δy = b − b = 0.</p><p><strong>Step 3:</strong> m = 0/Δx = 0.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 0 is correct for equal y-values.</p><p><strong>(B)</strong> Nonzero fraction requires nonzero Δy.</p><p><strong>(C)</strong> Also nonzero; inconsistent with horizontal line.</p><p><strong>(D)</strong> Undefined would require equal x-values.</p>"
  },
  {
    "id": 18,
    "passage": "An isosceles right triangle whose legs are 6 is rotated about one of its legs to generate a right circular cone. What is the volume of that cone?",
    "imageUrl": null,
    "question": "An isosceles right triangle whose legs are 6 is rotated about one of its legs to generate a right circular cone. What is the volume of that cone?",
    "choices": [
      "48<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">π",
      "72π",
      "72<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">π",
      "144π"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Rotating a right triangle about one leg forms a cone with height = that leg and radius = the other leg.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Legs are both 6.</p><p><strong>Step 2:</strong> After rotation about one leg, h = 6 and r = 6.</p><p><strong>Step 3:</strong> V = (1/3)πr<sup>2</sup>h = (1/3)π(36)(6)=72π.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Adds unnecessary √2 from hypotenuse.</p><p><strong>(B)</strong> 72π is exact.</p><p><strong>(C)</strong> Also incorrectly includes √2.</p><p><strong>(D)</strong> Double the correct volume.</p>"
  },
  {
    "id": 19,
    "passage": "Question below refers to the following figure, in which rectangle <i>ABCD</i> is divided into two 30-60-90 triangles, a 45-45-90 triangle, and shaded triangle <i>ABF</i>. <img src=\"https://images.cracksat.net/digital/br22/f0497-04.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0497-04.jpg",
    "question": "What is the perimeter of shaded triangle <i>ABF</i>?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\"> + 2<img src=\"https://images.cracksat.net/digital/br22/common11.jpg\">",
      "1 + <img src=\"https://images.cracksat.net/digital/br22/common10.jpg\"> + <img src=\"https://images.cracksat.net/digital/br22/common11.jpg\">",
      "2 + <img src=\"https://images.cracksat.net/digital/br22/common10.jpg\"> + <img src=\"https://images.cracksat.net/digital/br22/common11.jpg\">",
      "2<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\"> + 2<img src=\"https://images.cracksat.net/digital/br22/common11.jpg\">"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>The figure is built from 30-60-90 and 45-45-90 triangles, so side lengths of shaded triangle ABF are surd sums from fixed ratios.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Use the marked special triangles to find each side of ABF in radical form.</p><p><strong>Step 2:</strong> Add the three side lengths exactly (not decimal approximations).</p><p><strong>Step 3:</strong> The perimeter simplifies to 2√2 + 2√3.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Misses one of the radical contributions.</p><p><strong>(B)</strong> Includes an extra constant 1 not in final side-sum.</p><p><strong>(C)</strong> Includes constant 2 instead of doubling surd terms.</p><p><strong>(D)</strong> 2√2 + 2√3 matches the computed perimeter.</p>"
  },
  {
    "id": 20,
    "passage": "<span>$4x+6=8$</span>",
    "imageUrl": null,
    "question": "Which equation has the same solution as the given equation?",
    "choices": [
      "<span>$4x=108$</span>",
      "<span>$4x=24$</span>",
      "<span>$4x=12$</span>",
      "<span>$4x=3$</span>"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Equivalent equations come from valid inverse operations on both sides.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Subtract 6 from both sides of the given equation.</p><p><strong>Step 2:</strong> The equivalent form is 4x = 12.</p><p><strong>Step 3:</strong> This has the same x-solution as the original equation.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 4x = 108 gives a different x.</p><p><strong>(B)</strong> 4x = 24 gives a different x.</p><p><strong>(C)</strong> 4x = 12 is the correct equivalent equation.</p><p><strong>(D)</strong> 4x = 3 is not equivalent.</p>"
  },
  {
    "id": 21,
    "passage": "What is the slope of the line that passes through (3, 2) and is parallel to the line that passes through (-2, 3) and (2, -3)?",
    "imageUrl": null,
    "question": "What is the slope of the line that passes through (3, 2) and is parallel to the line that passes through (-2, 3) and (2, -3)?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/e0553-04.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0553-05.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/common15.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/common16.jpg\">"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Parallel lines have identical slope.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Slope through (−2,3) and (2,−3) is (−3−3)/(2−(−2)) = −6/4 = −3/2.</p><p><strong>Step 2:</strong> A parallel line through (3,2) keeps slope −3/2.</p><p><strong>Step 3:</strong> So the required slope is −3/2.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> This image corresponds to −3/2.</p><p><strong>(B)</strong> Reciprocal/sign-changed slope is perpendicular, not parallel.</p><p><strong>(C)</strong> Positive slope contradicts given line.</p><p><strong>(D)</strong> Not equal to −3/2.</p>"
  },
  {
    "id": 22,
    "passage": "If <span>$2\\sqrt{2}=a$</span><span>$2x$</span><span>$a$</span>",
    "imageUrl": null,
    "question": "If <span>$2\\sqrt{2}=a$</span><span>$2x$</span><span>$a$</span>",
    "choices": [
      "<span>$\\frac{a}{2}$</span>",
      "<span>$\\frac{a^{2}}{4}$</span>",
      "<span>$\\frac{a^{2}}{2}$</span>",
      "<span>$4a^{2}$</span>"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Isolate a radical, then square both sides to solve for the variable expression.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> From 2√x = a, divide by 2: √x = a/2.</p><p><strong>Step 2:</strong> Square both sides: x = (a/2)<sup>2</sup>.</p><p><strong>Step 3:</strong> x = a<sup>2</sup>/4.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> a/2 is √x, not x.</p><p><strong>(B)</strong> a<sup>2</sup>/4 is correct after squaring.</p><p><strong>(C)</strong> a<sup>2</sup>/2 is twice too large.</p><p><strong>(D)</strong> 4a<sup>2</sup> is the opposite scaling.</p>"
  },
  {
    "id": 23,
    "passage": "Question below refers to a rectangle in which the length of each diagonal is 12, and one of the angles formed by the diagonal and a side measures 30°.",
    "imageUrl": null,
    "question": "What is the area of the rectangle?",
    "choices": [
      "18",
      "72",
      "18<img src=\"https://images.cracksat.net/digital/br22/common11.jpg\">",
      "36<img src=\"https://images.cracksat.net/digital/br22/common11.jpg\">"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>A diagonal and 30° angle create a 30-60-90 triangle. Rectangle area is product of side lengths.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Hypotenuse is diagonal 12.</p><p><strong>Step 2:</strong> In 30-60-90 triangle, short leg = 6 and long leg = 6√3.</p><p><strong>Step 3:</strong> Rectangle area = 6·6√3 = 36√3.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 18 is too small.</p><p><strong>(B)</strong> 72 ignores the √3 ratio.</p><p><strong>(C)</strong> 18√3 is only half the rectangle area.</p><p><strong>(D)</strong> 36√3 is correct.</p>"
  },
  {
    "id": 24,
    "passage": "Jamila plans to invest $300 by buying shares of two different stocks. Stock A costs $5.62 per share and Stock B costs $12.97 per share. Which equation represents the number of shares of these stocks Jamila can buy, where <span>$a$</span><span>$b$</span>",
    "imageUrl": null,
    "question": "(Assume that there are no fees.)",
    "choices": [
      "<span>$12.97a+5.62b=300$</span>",
      "<span>$12.97a-5.62b=300$</span>",
      "<span>$5.62a+12.97b=300$</span>",
      "<span>$5.62a-12.97b=300$</span>"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Total cost equation: (price of A)(shares a) + (price of B)(shares b) = 300.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Stock A contributes 5.62a dollars.</p><p><strong>Step 2:</strong> Stock B contributes 12.97b dollars.</p><p><strong>Step 3:</strong> Sum gives 5.62a + 12.97b = 300.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Prices are assigned to wrong variables.</p><p><strong>(B)</strong> Uses subtraction; both costs must add.</p><p><strong>(C)</strong> Correct additive cost model.</p><p><strong>(D)</strong> Wrong signs and wrong assignment.</p>"
  },
  {
    "id": 25,
    "passage": "A pool initially contains 1,385 cubic feet of water. A pump begins emptying the water at a constant rate of 20 cubic feet per minute. Which of the following functions best approximates the volume <span>$v(t)$</span><span>$t$</span><span>$0\\let\\le69$</span>",
    "imageUrl": null,
    "question": "A pool initially contains 1,385 cubic feet of water. A pump begins emptying the water at a constant rate of 20 cubic feet per minute. Which of the following functions best approximates the volume <span>$v(t)$</span><span>$t$</span><span>$0\\let\\le69$</span>",
    "choices": [
      "<span>$v(t)=1,385-20t$</span>",
      "<span>$v(t)=1,385-69t$</span>",
      "<span>$v(t)=1,385+20t$</span>",
      "<span>$v(t)=1,385+69t$</span>"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Linear decay model: v(t) = initial amount + (rate)t, with negative rate for draining.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Initial volume is 1,385, so intercept is 1385.</p><p><strong>Step 2:</strong> Pump removes 20 ft<sup>3</sup>/min, so slope is −20.</p><p><strong>Step 3:</strong> v(t) = 1,385 − 20t.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Correct initial value and negative rate.</p><p><strong>(B)</strong> Uses 69 as rate instead of time limit.</p><p><strong>(C)</strong> Positive slope means filling, not emptying.</p><p><strong>(D)</strong> Wrong sign and wrong rate.</p>"
  },
  {
    "id": 26,
    "passage": "The boiling point of water at sea level is 212 degrees Fahrenheit (°F). For every increase of 1,000 feet above sea level, the boiling point of water drops approximately 1.84°F. Which of the following equations gives the approximate boiling point B, in °F, at h feet above sea level?",
    "imageUrl": null,
    "question": "The boiling point of water at sea level is 212 degrees Fahrenheit (°F). For every increase of 1,000 feet above sea level, the boiling point of water drops approximately 1.84°F. Which of the following equations gives the approximate boiling point B, in °F, at h feet above sea level?",
    "choices": [
      "<span>$B=212-1.84h$</span>",
      "<span>$B=212-(0.00184)h$</span>",
      "<span>$B=212h$</span>",
      "<span>$B=1.84(212)-1,000h$</span>"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Convert 1.84°F per 1,000 feet into per-foot rate: 0.00184°F per foot, then use linear model with sea-level intercept 212.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> At h = 0, B = 212.</p><p><strong>Step 2:</strong> Boiling point drops, so slope is negative: −0.00184 per foot.</p><p><strong>Step 3:</strong> B = 212 − 0.00184h.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Treats h as thousands of feet.</p><p><strong>(B)</strong> Correct per-foot conversion and sign.</p><p><strong>(C)</strong> Wrong form; gives B = 0 at sea level.</p><p><strong>(D)</strong> Incorrect constants/units.</p>"
  },
  {
    "id": 27,
    "passage": "Question below refers to circle <i>O</i>, in which <i>A</i> (-1, 0) and <i>B</i> (3, -2) are the endpoints of a diameter.",
    "imageUrl": null,
    "question": "Which of the following is the equation of circle <i>O</i>?",
    "choices": [
      "(<i>x</i> + 1)<sup>2</sup> + (<i>y</i> - 1)<sup>2</sup> = <img src=\"https://images.cracksat.net/digital/br22/e0554-03.jpg\">",
      "(<i>x</i> - 1)<sup>2</sup> + (<i>y</i> + 1)<sup>2</sup> = <img src=\"https://images.cracksat.net/digital/br22/e0554-03.jpg\">",
      "(<i>x</i> + 1)<sup>2</sup> + (<i>y</i> - 1)<sup>2</sup> = 5",
      "(<i>x</i> - 1)<sup>2</sup> + (<i>y</i> + 1)<sup>2</sup> = 5"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use midpoint for center and distance formula for diameter/radius in circle standard form.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Midpoint of A(−1,0) and B(3,−2) is (1,−1), so center is (1,−1).</p><p><strong>Step 2:</strong> AB = √((4)<sup>2</sup> + (−2)<sup>2</sup>) = √20 = 2√5, so r = √5.</p><p><strong>Step 3:</strong> Equation: (x−1)<sup>2</sup> + (y+1)<sup>2</sup> = 5.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Wrong center signs and right side.</p><p><strong>(B)</strong> Center right but radius term wrong.</p><p><strong>(C)</strong> Radius right but center wrong.</p><p><strong>(D)</strong> Correct center and r<sup>2</sup>.</p>"
  },
  {
    "id": 28,
    "passage": "If <span>$x&gt;0$</span><span>$\\frac{1}{x}+\\frac{1}{2x}$</span>",
    "imageUrl": null,
    "question": "If <span>$x&gt;0$</span><span>$\\frac{1}{x}+\\frac{1}{2x}$</span>",
    "choices": [
      "<span>$\\frac{1}{x}$</span>",
      "<span>$\\frac{1}{2x}$</span>",
      "<span>$\\frac{3}{2x}$</span>",
      "<span>$\\frac{2}{3x}$</span>"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Add fractions with common denominator.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Rewrite 1/x as 2/(2x).</p><p><strong>Step 2:</strong> Add: 2/(2x) + 1/(2x) = 3/(2x).</p><p><strong>Step 3:</strong> Simplified expression is 3/(2x).</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Keeps only first fraction.</p><p><strong>(B)</strong> Keeps only second fraction.</p><p><strong>(C)</strong> Correct sum with denominator 2x.</p><p><strong>(D)</strong> Reciprocal-type mistake.</p>"
  },
  {
    "id": 29,
    "passage": "Which expression is equivalent to <span>$x^{3}5·x5$</span><span>$x&gt;0$</span>",
    "imageUrl": null,
    "question": "Which expression is equivalent to <span>$x^{3}5·x5$</span><span>$x&gt;0$</span>",
    "choices": [
      "<span>$x^{\\frac{4}{5}}$</span>",
      "<span>$x^{\\frac{5}{4}}$</span>",
      "<span>$x^{\\frac{3}{25}}$</span>",
      "<span>$x^{\\frac{25}{3}}$</span>"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>When multiplying same base x, add exponents, including fractional exponents.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Read the two x-exponents in the product.</p><p><strong>Step 2:</strong> Add them: 3/5 + 1/5 = 4/5.</p><p><strong>Step 3:</strong> Equivalent expression is x<sup>4/5</sup>.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> x<sup>4/5</sup> matches exponent addition.</p><p><strong>(B)</strong> 5/4 is an inversion error.</p><p><strong>(C)</strong> 3/25 comes from wrong operation on exponents.</p><p><strong>(D)</strong> 25/3 is unrelated to the sum.</p>"
  },
  {
    "id": 30,
    "passage": "A farmer sold 108 pounds of produce that consisted of z pounds of zucchini and c pounds of cucumbers. The farmer sold the zucchini for $1.69 per pound and the cucumbers for $0.99 per pound and collected a total of $150.32. Which of the following systems of equations can be used to find the number of pounds of zucchini that were sold?",
    "imageUrl": null,
    "question": "A farmer sold 108 pounds of produce that consisted of z pounds of zucchini and c pounds of cucumbers. The farmer sold the zucchini for $1.69 per pound and the cucumbers for $0.99 per pound and collected a total of $150.32. Which of the following systems of equations can be used to find the number of pounds of zucchini that were sold?",
    "choices": [
      "<span>$z+c=150.32$</span><br><span>$1.69z+0.99c=108$</span>",
      "<span>$z+c=108$</span><br><span>$1.69z+0.99c=150.32$</span>",
      "<span>$z+c=108$</span><br><span>$0.99z+1.69c=150.32$</span>",
      "<span>$z+c=150.32$</span><br><span>$0.99z+1.69c=108$</span>"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use one equation for total pounds and one for total revenue, with correct variable-price pairing.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Total weight: z + c = 108.</p><p><strong>Step 2:</strong> Total money: 1.69z + 0.99c = 150.32.</p><p><strong>Step 3:</strong> This exact pair is the correct system.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Swaps totals 108 and 150.32.</p><p><strong>(B)</strong> Correct equations from context.</p><p><strong>(C)</strong> Swaps the produce prices.</p><p><strong>(D)</strong> Wrong totals and wrong pairing.</p>"
  },
  {
    "id": 31,
    "passage": "If <i>a + b</i> = 3(<i>c + d</i>), which of the following is the average (arithmetic mean) of <i>a, b, c</i>, and <i>d</i>?",
    "imageUrl": null,
    "question": "If <i>a + b</i> = 3(<i>c + d</i>), which of the following is the average (arithmetic mean) of <i>a, b, c</i>, and <i>d</i>?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/e0426-01.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0426-02.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0426-03.jpg\">",
      "<i>c + d</i>"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Mean of four numbers is (sum)/4; substitute given relation before dividing.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Given a + b = 3(c + d).</p><p><strong>Step 2:</strong> Then a + b + c + d = 3(c + d) + (c + d) = 4(c + d).</p><p><strong>Step 3:</strong> Mean = [4(c + d)]/4 = c + d.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Not equal to c + d after simplification.</p><p><strong>(B)</strong> Wrong coefficient from substitution.</p><p><strong>(C)</strong> Wrong divisor/combination.</p><p><strong>(D)</strong> Exactly equals the arithmetic mean.</p>"
  },
  {
    "id": 32,
    "passage": "<span>$x(x+2)=8$</span>",
    "imageUrl": null,
    "question": "Which of the following lists all solutions to the quadratic equation above?",
    "choices": [
      "8 and 6",
      "4 and -2",
      "-4 and 2",
      "<span>$\\sqrt{6}$</span>"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Solve quadratic by expansion and factoring.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> x(x+2)=8 → x<sup>2</sup>+2x−8=0.</p><p><strong>Step 2:</strong> Factor: (x+4)(x−2)=0.</p><p><strong>Step 3:</strong> Solutions are x = −4 and x = 2.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 8 and 6 do not satisfy equation.</p><p><strong>(B)</strong> 4 and −2 are incorrect roots.</p><p><strong>(C)</strong> −4 and 2 are the full solution set.</p><p><strong>(D)</strong> Single radical value is not all solutions.</p>"
  },
  {
    "id": 33,
    "passage": "<img src=\"https://images.cracksat.net/digital/sc23/24.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/sc23/24.jpg",
    "question": "The box plot summarizes the data for the annual cost of automobile insurance for automobile owners in a certain US city. Which of the following could be the median annual cost of automobile insurance for automobile owners in this city?",
    "choices": [
      "$1,625",
      "$2,000",
      "$2,100",
      "$2,750"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>The median in a box plot is the vertical line inside the box and must lie between Q1 and Q3 on the scale.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Read where the median marker sits on the insurance-cost axis.</p><p><strong>Step 2:</strong> It is around the low 1600s, not around 2000+.</p><p><strong>Step 3:</strong> The only plausible option is $1,625.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> $1,625 fits the plotted median location.</p><p><strong>(B)</strong> $2,000 is too far right of the median line.</p><p><strong>(C)</strong> $2,100 is also too high for the median mark.</p><p><strong>(D)</strong> $2,750 is near upper extreme, not center.</p>"
  },
  {
    "id": 34,
    "passage": "The function <span>$At=122^{\\frac{t}{6}}$</span><span>$At$</span><span>$t$</span><span>$2^{\\frac{t}{6}}$</span>",
    "imageUrl": null,
    "question": "The function <span>$At=122^{\\frac{t}{6}}$</span><span>$At$</span><span>$t$</span><span>$2^{\\frac{t}{6}}$</span>",
    "choices": [
      "The number of water hyacinths doubled t times.",
      "The number of water hyacinths doubled every 6 days.",
      "The number of water hyacinths increased by 2 every <span>$\\frac{t}{6}$</span>",
      "The number of water hyacinths increased by 2 every <span>$t$</span>"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>In A(t)=12·2<sup>t/6</sup>, base 2 means doubling and denominator 6 means every 6 time units (days).</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> At t=0, A=12 (initial count).</p><p><strong>Step 2:</strong> Increase t by 6: A(t+6)=12·2<sup>(t+6)/6</sup>=2A(t).</p><p><strong>Step 3:</strong> So the amount doubles every 6 days.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Says doubles t times; exponent is t/6, not t.</p><p><strong>(B)</strong> Correct interpretation of exponential model.</p><p><strong>(C)</strong> Describes additive +2 growth, not doubling.</p><p><strong>(D)</strong> Also additive and incorrect.</p>"
  },
  {
    "id": 35,
    "passage": "What is the average (arithmetic mean) of <i>x</i><sup>2</sup> + 2<i>x</i> - 3, 3<i>x</i><sup>2</sup> - 2<i>x</i> - 3, and 30 - 4<i>x</i><sup>2</sup>?",
    "imageUrl": null,
    "question": "What is the average (arithmetic mean) of <i>x</i><sup>2</sup> + 2<i>x</i> - 3, 3<i>x</i><sup>2</sup> - 2<i>x</i> - 3, and 30 - 4<i>x</i><sup>2</sup>?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/e0436-01.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0436-02.jpg\">",
      "-12",
      "8"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Arithmetic mean of three expressions is their sum divided by 3.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Add polynomials: (x<sup>2</sup>+2x−3)+(3x<sup>2</sup>−2x−3)+(30−4x<sup>2</sup>).</p><p><strong>Step 2:</strong> x<sup>2</sup> terms cancel, x terms cancel, constants sum to 24.</p><p><strong>Step 3:</strong> Mean = 24/3 = 8.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Keeps terms that cancel to zero.</p><p><strong>(B)</strong> Also fails to cancel correctly.</p><p><strong>(C)</strong> −12 has wrong sign and size.</p><p><strong>(D)</strong> 8 is exactly the average.</p>"
  },
  {
    "id": 36,
    "passage": "<img src=\"https://images.cracksat.net/digital/br22/f0497-02.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0497-02.jpg",
    "question": "What is the perimeter of Δ<i>ABC</i>?",
    "choices": [
      "32",
      "32 + 8<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "32 + 8<img src=\"https://images.cracksat.net/digital/br22/common11.jpg\">",
      "60"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use 3-4-5 and 30-60-90 triangle relationships from the diagram, then add sides of ΔABC.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> In ΔADB, hypotenuse 10 and leg 6 imply AD=8 (scaled 3-4-5).</p><p><strong>Step 2:</strong> In 30-60-90 ΔADC with short leg 8, AC=16 and CD=8√3.</p><p><strong>Step 3:</strong> Perimeter ΔABC = AB + BC + AC = 10 + (6+8√3) + 16 = 32 + 8√3.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Omits the radical segment.</p><p><strong>(B)</strong> Uses √2 instead of √3.</p><p><strong>(C)</strong> 32 + 8√3 matches derived side lengths.</p><p><strong>(D)</strong> 60 is not exact and overestimates.</p>"
  },
  {
    "id": 37,
    "passage": "<img src=\"https://images.cracksat.net/digital/sc23/22.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/sc23/22.jpg",
    "question": "Which of the following is true about the standard deviations of the two data sets in the table above?",
    "choices": [
      "The standard deviation of data set B is larger than the standard deviation of data set A.",
      "The standard deviation of data set A is larger than the standard deviation of data set B.",
      "The standard deviation of data set A is equal to the standard deviation of data set B.",
      "There is not enough information available to compare the standard deviations of the two data sets."
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Standard deviation measures spread around the mean. More spread-out data means larger standard deviation.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Compare how far values in each set lie from their center in the table.</p><p><strong>Step 2:</strong> Data set B shows larger overall spread than data set A.</p><p><strong>Step 3:</strong> Therefore SD(B) > SD(A).</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Correct: set B is more dispersed.</p><p><strong>(B)</strong> Opposite of what spread indicates.</p><p><strong>(C)</strong> Equal SD would require similar spread patterns.</p><p><strong>(D)</strong> Table gives enough information to compare spread.</p>"
  },
  {
    "id": 38,
    "passage": "Future Value of an Investment after 20 Years for Different Interest Rates <img src=\"https://images.cracksat.net/digital/sc23/27.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/sc23/27.jpg",
    "question": "An initial investment of $1,000 is made at a constant annual interest rate. The graphs above show the corresponding future value <span>$v$</span><span>$r$</span>",
    "choices": [
      "As <span>$r$</span><span>$v$</span>",
      "As <span>$r$</span><span>$v$</span>",
      "As <span>$r$</span>",
      "If <span>$r=15%$</span>"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Future value with fixed years is exponential in interest rate: v = 1000(1+r)<sup>20</sup>. Exponential curves rise faster as r increases.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> From the graph, v increases as r increases.</p><p><strong>Step 2:</strong> The curve bends upward, showing larger gains at higher r.</p><p><strong>Step 3:</strong> So the true statement is the accelerating-increase description.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Does not match the upward-curving trend.</p><p><strong>(B)</strong> Matches exponential shape shown.</p><p><strong>(C)</strong> Claims non-increasing behavior, contradicted by graph.</p><p><strong>(D)</strong> Specific value claim at 15% does not match plotted value.</p>"
  },
  {
    "id": 39,
    "passage": "<img src=\"https://images.cracksat.net/digital/br22/f0496-03.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0496-03.jpg",
    "question": "What is the value of <i>PS</i> in the triangle above?",
    "choices": [
      "5<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "10",
      "11",
      "13"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Apply Pythagorean theorem in nested right triangles.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> In ΔPQR: PR=20, QR=16, so PQ=√(20<sup>2</sup>−16<sup>2</sup>)=12.</p><p><strong>Step 2:</strong> In ΔPQS (right triangle), legs are 12 and 5.</p><p><strong>Step 3:</strong> PS=√(12<sup>2</sup>+5<sup>2</sup>)=√169=13.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 5√5 is not √169.</p><p><strong>(B)</strong> 10 is too short for hypotenuse with leg 12.</p><p><strong>(C)</strong> 11 is also too short.</p><p><strong>(D)</strong> 13 is exact.</p>"
  },
  {
    "id": 40,
    "passage": "<img src=\"https://images.cracksat.net/digital/br22/f0511-01.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0511-01.jpg",
    "question": "In the figure above, the two diagonals divide square <i>ABCD</i> into four small triangles. What is the sum of the perimeters of those triangles?",
    "choices": [
      "2 + 2<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "8 + 4<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "8 + 8<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "16"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Diagonals split square into four congruent 45-45-90 triangles. Sum of perimeters is 4 times one small perimeter.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Each small triangle has hypotenuse 2.</p><p><strong>Step 2:</strong> Legs are 2/√2 = √2 each.</p><p><strong>Step 3:</strong> One perimeter = 2+2√2, so total = 4(2+2√2)=8+8√2.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Only one triangle’s perimeter.</p><p><strong>(B)</strong> Doubles constant but not full radical part.</p><p><strong>(C)</strong> 8 + 8√2 is correct for four triangles.</p><p><strong>(D)</strong> Ignores √2 edge lengths.</p>"
  },
  {
    "id": 41,
    "passage": "The tables provide the distributions of majors of students at College A and College B.",
    "imageUrl": null,
    "question": "Which of the following is true about the data shown for these two colleges?",
    "choices": [
      "The standard deviation of majors at College A is larger.",
      "The standard deviation of majors at College B is larger.",
      "The standard deviation of majors at College A is the same as the standard deviation of College B.",
      "The standard deviation of both data sets cannot be calculated."
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Larger standard deviation corresponds to a distribution that is more spread from its mean.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Compare how concentrated each college’s major counts are in their tables.</p><p><strong>Step 2:</strong> College A has more extreme category values and wider spread.</p><p><strong>Step 3:</strong> Therefore College A has larger standard deviation.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Correct: College A is more dispersed.</p><p><strong>(B)</strong> Opposite of observed spread.</p><p><strong>(C)</strong> Not same spread pattern, so not same SD.</p><p><strong>(D)</strong> Data provided is sufficient for SD comparison.</p>"
  },
  {
    "id": 42,
    "passage": "Question below refers to the following figure, in which rectangle <i>ABCD</i> is divided into two 30-60-90 triangles, a 45-45-90 triangle, and shaded triangle <i>ABF</i>. <img src=\"https://images.cracksat.net/digital/br22/f0497-04.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0497-04.jpg",
    "question": "What is the area of shaded triangle <i>ABF</i>?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/e0498-01.jpg\">",
      "1",
      "<img src=\"https://images.cracksat.net/digital/br22/e0498-02.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0498-03.jpg\">"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Triangle area formula A = (1/2)bh, with base/height derived from the special-triangle partition in the image.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Use given 30-60-90 and 45-45-90 pieces to determine shaded triangle ABF base and height.</p><p><strong>Step 2:</strong> Substitute into A=(1/2)bh.</p><p><strong>Step 3:</strong> The exact area simplifies to 1.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> This image expression is not equal to 1.</p><p><strong>(B)</strong> 1 matches the computed area.</p><p><strong>(C)</strong> Uses incorrect segment as height.</p><p><strong>(D)</strong> Overestimates from wrong pair of dimensions.</p>"
  },
  {
    "id": 43,
    "passage": "(<i>x</i><sup>2</sup> + 3<i>x</i><sup>2</sup>)<sup>3</sup> = ?",
    "imageUrl": null,
    "question": "(<i>x</i><sup>2</sup> + 3<i>x</i><sup>2</sup>)<sup>3</sup> = ?",
    "choices": [
      "3<i>x</i><sup>12<i>x</i></sup>",
      "27<i>x</i><sup>5</sup>",
      "28<i>x</i><sup>6</sup>",
      "64<i>x</i><sup>6</sup>"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Combine like terms first, then raise to a power.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> x<sup>2</sup> + 3x<sup>2</sup> = 4x<sup>2</sup>.</p><p><strong>Step 2:</strong> (4x<sup>2</sup>)<sup>3</sup> = 4<sup>3</sup>(x<sup>2</sup>)<sup>3</sup>.</p><p><strong>Step 3:</strong> 4<sup>3</sup>=64 and (x<sup>2</sup>)<sup>3</sup>=x<sup>6</sup>, so result is 64x<sup>6</sup>.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Not equal to 64x<sup>6</sup>.</p><p><strong>(B)</strong> Uses coefficient 27 incorrectly.</p><p><strong>(C)</strong> 28x<sup>6</sup> from wrong arithmetic.</p><p><strong>(D)</strong> 64x<sup>6</sup> is exact.</p>"
  },
  {
    "id": 44,
    "passage": "Question below refers to a rectangle in which the length of each diagonal is 12, and one of the angles formed by the diagonal and a side measures 30°.",
    "imageUrl": null,
    "question": "What is the perimeter of the rectangle?",
    "choices": [
      "18",
      "24",
      "12 + 12<img src=\"https://images.cracksat.net/digital/br22/common11.jpg\">",
      "18 + 6<img src=\"https://images.cracksat.net/digital/br22/common11.jpg\">"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use 30-60-90 side ratios from diagonal 12, then perimeter P=2(l+w).</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Sides are 6 and 6√3.</p><p><strong>Step 2:</strong> P = 2(6 + 6√3).</p><p><strong>Step 3:</strong> P = 12 + 12√3.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Too small for these side lengths.</p><p><strong>(B)</strong> Assumes both sides are 6.</p><p><strong>(C)</strong> Exact perimeter from formula.</p><p><strong>(D)</strong> Incomplete multiplication by 2.</p>"
  },
  {
    "id": 45,
    "passage": "Question below refers to the following figure, in which <i>M</i> and <i>N</i> are midpoints of two of the sides of square <i>ABCD</i>. <img src=\"https://images.cracksat.net/digital/br22/f0512-01.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0512-01.jpg",
    "question": "What is the area of the shaded region?",
    "choices": [
      "1.5",
      "1.75",
      "2<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "3<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Shaded area is difference of two triangle areas; midpoint information gives exact lengths.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Area of ΔABD = (1/2)(2)(2)=2.</p><p><strong>Step 2:</strong> M and N are midpoints, so AM=AN=1 and area of ΔAMN=(1/2)(1)(1)=0.5.</p><p><strong>Step 3:</strong> Shaded area = 2 − 0.5 = 1.5.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 1.5 equals the computed difference.</p><p><strong>(B)</strong> 1.75 subtracts too little.</p><p><strong>(C)</strong> 2√2 is not this area.</p><p><strong>(D)</strong> 3√2 exceeds feasible region size.</p>"
  },
  {
    "id": 46,
    "passage": "Question below refers to the following figure, in which <i>M</i> and <i>N</i> are midpoints of two of the sides of square <i>ABCD</i>. <img src=\"https://images.cracksat.net/digital/br22/f0512-01.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/f0512-01.jpg",
    "question": "What is the perimeter of the shaded region?",
    "choices": [
      "3",
      "2 + 3<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "3 + 2<img src=\"https://images.cracksat.net/digital/br22/common10.jpg\">",
      "5"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Perimeter is sum of boundary segments. Use midpoint lengths and right-triangle diagonals.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> AM=AN=1 because side length is 2 and M,N are midpoints.</p><p><strong>Step 2:</strong> MN=√2 (legs 1 and 1), and BD=2√2 (square diagonal).</p><p><strong>Step 3:</strong> Perimeter = 1 + √2 + 1 + 2√2 = 2 + 3√2.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Misses radical segments.</p><p><strong>(B)</strong> 2 + 3√2 matches full boundary sum.</p><p><strong>(C)</strong> Coefficients on constant and radical are swapped.</p><p><strong>(D)</strong> 5 underestimates because 3√2 ≈ 4.24.</p>"
  },
  {
    "id": 47,
    "passage": "The following equations could all have the constant <i>k</i> equal zero and have a defined solution EXCEPT",
    "imageUrl": null,
    "question": "The following equations could all have the constant <i>k</i> equal zero and have a defined solution EXCEPT",
    "choices": [
      "<i>kx</i> = 0",
      "3 = <i>k</i> - <i>x</i>",
      "4<i>k</i> + <i>x</i> = 7",
      "2/<i>k</i> = <i>X</i>"
    ],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>The only invalid case when k=0 is division by zero.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> If k=0, then kx=0 is valid (true for all x).</p><p><strong>Step 2:</strong> 3=k−x gives x=−3, and 4k+x=7 gives x=7; both defined.</p><p><strong>Step 3:</strong> 2/k=x becomes 2/0=x, undefined.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Defined when k=0.</p><p><strong>(B)</strong> Defined with unique x.</p><p><strong>(C)</strong> Defined with unique x.</p><p><strong>(D)</strong> Undefined due to division by zero.</p>"
  },
  {
    "id": 48,
    "passage": "If a population that is initially 100 triples every year, which of the following is an expression for the size of the population after <i>t</i> months?",
    "imageUrl": null,
    "question": "If a population that is initially 100 triples every year, which of the following is an expression for the size of the population after <i>t</i> months?",
    "choices": [
      "100 × 3<sup><i>t</i></sup>",
      "100 × 12<sup>3<i>t</i></sup>",
      "100 × <img src=\"https://images.cracksat.net/digital/br22/e0590-01.jpg\">",
      "100 × <img src=\"https://images.cracksat.net/digital/br22/e0590-02.jpg\">"
    ],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Tripling each year means multiply by 3 for each year elapsed. Convert months to years with t/12.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Initial population is 100.</p><p><strong>Step 2:</strong> After t months, elapsed years = t/12.</p><p><strong>Step 3:</strong> Population = 100·3<sup>t/12</sup>.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Treats t as years, not months.</p><p><strong>(B)</strong> Uses incorrect base 12.</p><p><strong>(C)</strong> This image matches 100·3<sup>t/12</sup>.</p><p><strong>(D)</strong> Wrong exponent scaling for monthly time.</p>"
  },
  {
    "id": 49,
    "passage": "<img src=\"https://images.cracksat.net/digital/br22/line3.jpg\">",
    "imageUrl": "https://images.cracksat.net/digital/br22/line3.jpg",
    "question": "If <i>f</i>(<i>x</i>) = |<i>x</i> + 1|, for what value of <i>x</i> does <i>f</i>(<i>x</i> - 2) = <i>f</i>(<i>x</i> + 2)?",
    "choices": [
      "-1",
      "0",
      "1",
      "No value of <i>x</i>"
    ],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Substitute into absolute value function and solve |x−1| = |x+3|.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> f(x−2)=|(x−2)+1|=|x−1|, and f(x+2)=|(x+2)+1|=|x+3|.</p><p><strong>Step 2:</strong> Set equal: |x−1| = |x+3|.</p><p><strong>Step 3:</strong> x is midpoint of 1 and −3, so x = −1.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> x=−1 gives both sides 2.</p><p><strong>(B)</strong> x=0 gives 1 and 3, not equal.</p><p><strong>(C)</strong> x=1 gives 0 and 4, not equal.</p><p><strong>(D)</strong> There is a valid value, so this is false.</p>"
  },
  {
    "id": 50,
    "passage": "<img src=\"https://images.cracksat.net/digital/br22/e0389-04.jpg\"> is the average (arithmetic mean) of <img src=\"https://images.cracksat.net/digital/br22/e0382-03a.jpg\"> and what number?",
    "imageUrl": "https://images.cracksat.net/digital/br22/e0389-04.jpg",
    "question": "<img src=\"https://images.cracksat.net/digital/br22/e0389-04.jpg\"> is the average (arithmetic mean) of <img src=\"https://images.cracksat.net/digital/br22/e0382-03a.jpg\"> and what number?",
    "choices": [
      "<img src=\"https://images.cracksat.net/digital/br22/e0389-05.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0389-06.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/e0389-07.jpg\">",
      "<img src=\"https://images.cracksat.net/digital/br22/common82.jpg\">"
    ],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>If m is the average of a and x, then m=(a+x)/2. Solve this for x.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Write the mean equation with the two expressions shown in the prompt.</p><p><strong>Step 2:</strong> Multiply both sides by 2 to remove the denominator.</p><p><strong>Step 3:</strong> Rearranged form is x = 2m − a, which matches choice B.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Does not match x = 2m − a.</p><p><strong>(B)</strong> Matches the correct rearranged mean equation.</p><p><strong>(C)</strong> Sign/order error from rearrangement.</p><p><strong>(D)</strong> Not equivalent to 2m − a.</p>"
  }
];

void mathQuestions;
