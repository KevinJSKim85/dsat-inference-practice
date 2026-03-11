const geometryQuestions = [
  {
    "id": 1,
    "passage": "In the xy-plane, a circle has equation x<sup>2</sup> + y<sup>2</sup> - 6x + 8y - 11 = 0. What is the area of the circle?",
    "imageUrl": null,
    "question": "In the xy-plane, a circle has equation x<sup>2</sup> + y<sup>2</sup> - 6x + 8y - 11 = 0. What is the area of the circle?",
    "choices": ["16π", "25π", "36π", "49π"],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>To find a circle's area from a general equation, complete the square to convert to standard form (x - h)<sup>2</sup> + (y - k)<sup>2</sup> = r<sup>2</sup>. Then use A = πr<sup>2</sup>.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Group x-terms and y-terms: (x<sup>2</sup> - 6x) + (y<sup>2</sup> + 8y) - 11 = 0.</p><p><strong>Step 2:</strong> Move constant and complete squares: x<sup>2</sup> - 6x + 9 + y<sup>2</sup> + 8y + 16 = 11 + 9 + 16.</p><p><strong>Step 3:</strong> Write standard form: (x - 3)<sup>2</sup> + (y + 4)<sup>2</sup> = 36, so r = 6.</p><p><strong>Step 4:</strong> Area = π(6)<sup>2</sup> = 36π.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 16π would come from radius 4, not 6.</p><p><strong>(B)</strong> 25π would come from radius 5, not 6.</p><p><strong>(C)</strong> 36π matches r = 6 exactly.</p><p><strong>(D)</strong> 49π would come from radius 7, too large.</p>"
  },
  {
    "id": 2,
    "passage": "In the xy-plane, the endpoints of a diameter of circle C are (2, 1) and (8, 1). Which equation represents circle C?",
    "imageUrl": null,
    "question": "In the xy-plane, the endpoints of a diameter of circle C are (2, 1) and (8, 1). Which equation represents circle C?",
    "choices": ["(x - 5)² + (y - 1)² = 6", "(x - 5)² + (y - 1)² = 9", "(x - 3)² + (y - 1)² = 9", "(x - 5)² + (y - 1)² = 36"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>The center of a circle is the midpoint of a diameter. The radius is half the diameter length, and the equation is (x - h)<sup>2</sup> + (y - k)<sup>2</sup> = r<sup>2</sup>.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Find midpoint of (2, 1) and (8, 1): ((2 + 8)/2, (1 + 1)/2) = (5, 1).</p><p><strong>Step 2:</strong> Diameter length is 8 - 2 = 6, so radius r = 3.</p><p><strong>Step 3:</strong> Compute r<sup>2</sup> = 9.</p><p><strong>Step 4:</strong> Equation is (x - 5)<sup>2</sup> + (y - 1)<sup>2</sup> = 9.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Right center but right side should be r<sup>2</sup>, not 6.</p><p><strong>(B)</strong> Correct center (5,1) and correct r<sup>2</sup> = 9.</p><p><strong>(C)</strong> Uses wrong center x-coordinate.</p><p><strong>(D)</strong> 36 would mean radius 6, which is the diameter.</p>"
  },
  {
    "id": 3,
    "passage": "For real number a, the graph of x<sup>2</sup> + y<sup>2</sup> + ax - 12y + 20 = 0 is a circle tangent to the x-axis. What is the positive value of a?",
    "imageUrl": null,
    "question": "For real number a, the graph of x<sup>2</sup> + y<sup>2</sup> + ax - 12y + 20 = 0 is a circle tangent to the x-axis. What is the positive value of a?",
    "choices": ["2√5", "4√5", "6√5", "8√5"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>After completing the square, compare the circle's center and radius. Tangency to the x-axis means the radius equals the vertical distance from the center to y = 0.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Group and complete squares: x<sup>2</sup> + ax + y<sup>2</sup> - 12y + 20 = 0 becomes (x + a/2)<sup>2</sup> - a<sup>2</sup>/4 + (y - 6)<sup>2</sup> - 36 + 20 = 0.</p><p><strong>Step 2:</strong> Rearrange: (x + a/2)<sup>2</sup> + (y - 6)<sup>2</sup> = a<sup>2</sup>/4 + 16. So center is (-a/2, 6) and r<sup>2</sup> = a<sup>2</sup>/4 + 16.</p><p><strong>Step 3:</strong> Tangent to x-axis means r = 6. Therefore r<sup>2</sup> = 36.</p><p><strong>Step 4:</strong> Set a<sup>2</sup>/4 + 16 = 36, so a<sup>2</sup>/4 = 20, a<sup>2</sup> = 80, a = 4√5 (positive).</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Too small; squaring gives 20, not 80.</p><p><strong>(B)</strong> (4√5)<sup>2</sup> = 80, which satisfies the condition.</p><p><strong>(C)</strong> Gives a<sup>2</sup> = 180, too large.</p><p><strong>(D)</strong> Gives a<sup>2</sup> = 320, much too large.</p>"
  },
  {
    "id": 4,
    "passage": "In the xy-plane, a circle has equation x<sup>2</sup> + y<sup>2</sup> - 2x + 6y - 15 = 0. What is the length of the chord cut from this circle by the line y = 1?",
    "imageUrl": null,
    "question": "In the xy-plane, a circle has equation x<sup>2</sup> + y<sup>2</sup> - 2x + 6y - 15 = 0. What is the length of the chord cut from this circle by the line y = 1?",
    "choices": ["3", "4", "6", "8"],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>A chord length from a horizontal line can be found by solving the circle equation for the two intersection x-values, then taking the distance between them.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Complete squares: x<sup>2</sup> - 2x + y<sup>2</sup> + 6y - 15 = 0 becomes (x - 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 25.</p><p><strong>Step 2:</strong> Substitute y = 1: (x - 1)<sup>2</sup> + (1 + 3)<sup>2</sup> = 25.</p><p><strong>Step 3:</strong> (x - 1)<sup>2</sup> + 16 = 25, so (x - 1)<sup>2</sup> = 9.</p><p><strong>Step 4:</strong> x - 1 = 3 or -3, so x = 4 or x = -2. Chord length is 4 - (-2) = 6.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 3 is half the chord, not the full length.</p><p><strong>(B)</strong> Does not match the solved endpoints.</p><p><strong>(C)</strong> Correct difference between x-intersections.</p><p><strong>(D)</strong> Too long for these intersection points.</p>"
  },
  {
    "id": 5,
    "passage": "If tan θ = 3/4 for an acute angle θ, what is the value of sin(90° - θ) + cos θ?",
    "imageUrl": null,
    "question": "If tan θ = 3/4 for an acute angle θ, what is the value of sin(90° - θ) + cos θ?",
    "choices": ["3/5", "4/5", "6/5", "8/5"],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use the cofunction identity sin(90° - θ) = cos θ. Also, tan θ = opposite/adjacent lets you build a right triangle to find cos θ.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Since tan θ = 3/4, let opposite = 3 and adjacent = 4. Then hypotenuse = 5 by the 3-4-5 triangle.</p><p><strong>Step 2:</strong> Compute cos θ = adjacent/hypotenuse = 4/5.</p><p><strong>Step 3:</strong> Apply identity: sin(90° - θ) = cos θ = 4/5.</p><p><strong>Step 4:</strong> Sum is 4/5 + 4/5 = 8/5.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 3/5 is sin θ, not the required sum.</p><p><strong>(B)</strong> 4/5 is only one term, not both terms added.</p><p><strong>(C)</strong> 6/5 comes from mixing sin and cos incorrectly.</p><p><strong>(D)</strong> 8/5 correctly adds two copies of 4/5.</p>"
  },
  {
    "id": 6,
    "passage": "If x is acute and sin x = 5/13, what is tan(90° - x)?",
    "imageUrl": null,
    "question": "If x is acute and sin x = 5/13, what is tan(90° - x)?",
    "choices": ["5/12", "12/5", "5/13", "13/12"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use tan(90° - x) = cot x and cot x = cos x / sin x. If sin x is known for an acute angle, find cos x from a right triangle.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> sin x = 5/13 means opposite = 5 and hypotenuse = 13.</p><p><strong>Step 2:</strong> Find adjacent side: adjacent = √(13<sup>2</sup> - 5<sup>2</sup>) = √(169 - 25) = √144 = 12.</p><p><strong>Step 3:</strong> So cos x = 12/13.</p><p><strong>Step 4:</strong> tan(90° - x) = cot x = (12/13) / (5/13) = 12/5.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 5/12 is tan x, not cot x.</p><p><strong>(B)</strong> 12/5 equals cot x, which is tan(90° - x).</p><p><strong>(C)</strong> 5/13 is sin x, not the requested value.</p><p><strong>(D)</strong> 13/12 is sec x, not cot x.</p>"
  },
  {
    "id": 7,
    "passage": "In right triangle ABC with right angle at C, altitude CD is drawn to hypotenuse AB, where D lies on AB. If AD = 4 and DB = 9, what is tan A?",
    "imageUrl": null,
    "question": "In right triangle ABC with right angle at C, altitude CD is drawn to hypotenuse AB, where D lies on AB. If AD = 4 and DB = 9, what is tan A?",
    "choices": ["2/3", "3/2", "9/4", "4/9"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>For an altitude to the hypotenuse in a right triangle, CD<sup>2</sup> = AD · DB. In right triangle ACD, tan A = opposite/adjacent = CD/AD.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Use altitude relation: CD = √(AD · DB) = √(4 · 9) = √36 = 6.</p><p><strong>Step 2:</strong> In triangle ACD, angle A is the same as in triangle ABC.</p><p><strong>Step 3:</strong> tan A = CD/AD = 6/4 = 3/2.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 2/3 is the reciprocal of the correct ratio.</p><p><strong>(B)</strong> 3/2 is exactly CD/AD.</p><p><strong>(C)</strong> Uses DB and AD directly, which is not tan A.</p><p><strong>(D)</strong> 4/9 ignores the computed altitude.</p>"
  },
  {
    "id": 8,
    "passage": "A right circular cylinder has radius r and height 2r. A right circular cone has the same base radius r and volume equal to the cylinder's volume. What is the cone's height in terms of r?",
    "imageUrl": null,
    "question": "A right circular cylinder has radius r and height 2r. A right circular cone has the same base radius r and volume equal to the cylinder's volume. What is the cone's height in terms of r?",
    "choices": ["2r", "3r", "4r", "6r"],
    "correct": 3,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use volume formulas V<sub>cylinder</sub> = πr<sup>2</sup>h and V<sub>cone</sub> = (1/3)πr<sup>2</sup>h. Set them equal because volumes are stated equal.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Cylinder volume is πr<sup>2</sup>(2r) = 2πr<sup>3</sup>.</p><p><strong>Step 2:</strong> Let cone height be h. Then cone volume is (1/3)πr<sup>2</sup>h.</p><p><strong>Step 3:</strong> Set equal: (1/3)πr<sup>2</sup>h = 2πr<sup>3</sup>.</p><p><strong>Step 4:</strong> Cancel πr<sup>2</sup>: h/3 = 2r, so h = 6r.</p><p>The answer is <strong>D</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Too short; gives cone volume only one-third of cylinder.</p><p><strong>(B)</strong> Still too short for equal volumes.</p><p><strong>(C)</strong> Gives volume less than cylinder.</p><p><strong>(D)</strong> 6r makes (1/3)πr<sup>2</sup>(6r) = 2πr<sup>3</sup>.</p>"
  },
  {
    "id": 9,
    "passage": "A solid sphere of radius 6 is melted and recast into identical solid hemispheres of radius 3. How many hemispheres are formed?",
    "imageUrl": null,
    "question": "A solid sphere of radius 6 is melted and recast into identical solid hemispheres of radius 3. How many hemispheres are formed?",
    "choices": ["8", "12", "16", "18"],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>When a solid is melted and recast, total volume is conserved. Compute the original sphere volume and divide by one hemisphere volume.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Sphere volume: V = (4/3)π(6<sup>3</sup>) = (4/3)π(216) = 288π.</p><p><strong>Step 2:</strong> Hemisphere volume with radius 3: V = (1/2)·(4/3)π(3<sup>3</sup>) = (2/3)π(27) = 18π.</p><p><strong>Step 3:</strong> Number of hemispheres = 288π / 18π = 16.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> 8 is half the required count.</p><p><strong>(B)</strong> 12 underestimates conserved volume.</p><p><strong>(C)</strong> 16 exactly matches the volume ratio.</p><p><strong>(D)</strong> 18 overestimates the count.</p>"
  },
  {
    "id": 10,
    "passage": "A solid consists of a right circular cylinder of radius 3 and height 10 with a hemisphere of radius 3 attached on top. If the exposed surface includes the curved surfaces and the bottom circular base, what is the total surface area?",
    "imageUrl": null,
    "question": "A solid consists of a right circular cylinder of radius 3 and height 10 with a hemisphere of radius 3 attached on top. If the exposed surface includes the curved surfaces and the bottom circular base, what is the total surface area?",
    "choices": ["78π", "84π", "87π", "96π"],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Add only exposed surfaces: cylinder lateral area, hemisphere curved area, and the cylinder's bottom base. The shared circular interface is internal and not counted.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Cylinder lateral area = 2πrh = 2π(3)(10) = 60π.</p><p><strong>Step 2:</strong> Hemisphere curved area = 2πr<sup>2</sup> = 2π(3<sup>2</sup>) = 18π.</p><p><strong>Step 3:</strong> Bottom circular base area = πr<sup>2</sup> = π(3<sup>2</sup>) = 9π.</p><p><strong>Step 4:</strong> Total exposed area = 60π + 18π + 9π = 87π.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Misses 9π from one required exposed part.</p><p><strong>(B)</strong> Common arithmetic slip from adding two parts only.</p><p><strong>(C)</strong> Correct sum of all exposed components.</p><p><strong>(D)</strong> Too large; likely double-counts an internal circle.</p>"
  },
  {
    "id": 11,
    "passage": "A right circular cone has height 12 and slant height 13. The cone is filled completely with water and then poured into a right circular cylinder of radius 3. What is the height of water in the cylinder?",
    "imageUrl": null,
    "question": "A right circular cone has height 12 and slant height 13. The cone is filled completely with water and then poured into a right circular cylinder of radius 3. What is the height of water in the cylinder?",
    "choices": ["25/3", "100/9", "32/3", "125/9"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>First find cone radius using the right triangle formed by height, radius, and slant height. Then conserve volume when transferring water into the cylinder.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Use l<sup>2</sup> = r<sup>2</sup> + h<sup>2</sup>: 13<sup>2</sup> = r<sup>2</sup> + 12<sup>2</sup>, so r<sup>2</sup> = 169 - 144 = 25, hence r = 5.</p><p><strong>Step 2:</strong> Cone volume = (1/3)πr<sup>2</sup>h = (1/3)π(25)(12) = 100π.</p><p><strong>Step 3:</strong> Let cylinder water height be H. Cylinder volume is π(3<sup>2</sup>)H = 9πH.</p><p><strong>Step 4:</strong> Set equal: 9πH = 100π, so H = 100/9.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Too small for volume 100π in radius-3 cylinder.</p><p><strong>(B)</strong> 100/9 satisfies 9πH = 100π.</p><p><strong>(C)</strong> Would give volume 96π, not 100π.</p><p><strong>(D)</strong> Would give volume 125π, too large.</p>"
  },
  {
    "id": 12,
    "passage": "In the xy-plane, triangle ABC has vertices A(-2, 1), B(4, 5), and C(6, -1). What is the perimeter of triangle ABC?",
    "imageUrl": null,
    "question": "In the xy-plane, triangle ABC has vertices A(-2, 1), B(4, 5), and C(6, -1). What is the perimeter of triangle ABC?",
    "choices": ["2(√13 + √10 + √17)", "√52 + √40 + √68", "2√40 + √68", "2(√13 + √10) + √17"],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Use the distance formula for each side length, then add. Simplify radicals where possible before summing.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> AB = √[(4 - (-2))<sup>2</sup> + (5 - 1)<sup>2</sup>] = √(6<sup>2</sup> + 4<sup>2</sup>) = √52 = 2√13.</p><p><strong>Step 2:</strong> BC = √[(6 - 4)<sup>2</sup> + (-1 - 5)<sup>2</sup>] = √(2<sup>2</sup> + (-6)<sup>2</sup>) = √40 = 2√10.</p><p><strong>Step 3:</strong> AC = √[(6 - (-2))<sup>2</sup> + (-1 - 1)<sup>2</sup>] = √(8<sup>2</sup> + (-2)<sup>2</sup>) = √68 = 2√17.</p><p><strong>Step 4:</strong> Perimeter = 2√13 + 2√10 + 2√17 = 2(√13 + √10 + √17).</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Correctly simplifies all three distances then factors 2.</p><p><strong>(B)</strong> Equivalent before simplification, but not the listed simplified target form.</p><p><strong>(C)</strong> Omits the full contribution of AB.</p><p><strong>(D)</strong> Last radical coefficient should be 2, not 1.</p>"
  },
  {
    "id": 13,
    "passage": "In the xy-plane, A(1, 4) and B(7, -2). Let M be the midpoint of AB. What is the equation of the line through M that is perpendicular to AB?",
    "imageUrl": null,
    "question": "In the xy-plane, A(1, 4) and B(7, -2). Let M be the midpoint of AB. What is the equation of the line through M that is perpendicular to AB?",
    "choices": ["y = x - 3", "y = -x + 5", "y = x + 3", "y = -x - 3"],
    "correct": 0,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Compute midpoint and slope of AB. A line perpendicular to slope m has slope -1/m (for nonzero m), then use point-slope form.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Midpoint M = ((1 + 7)/2, (4 + (-2))/2) = (4, 1).</p><p><strong>Step 2:</strong> Slope of AB = (-2 - 4)/(7 - 1) = -6/6 = -1.</p><p><strong>Step 3:</strong> Perpendicular slope is 1.</p><p><strong>Step 4:</strong> Through (4,1): y - 1 = 1(x - 4), so y = x - 3.</p><p>The answer is <strong>A</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Has slope 1 and passes through (4,1).</p><p><strong>(B)</strong> Slope is -1, parallel to AB, not perpendicular.</p><p><strong>(C)</strong> Slope 1 but does not pass through midpoint.</p><p><strong>(D)</strong> Slope -1 and wrong intercept.</p>"
  },
  {
    "id": 14,
    "passage": "In the xy-plane, a square has opposite vertices at (-1, 2) and (7, 6). What is the area of the square?",
    "imageUrl": null,
    "question": "In the xy-plane, a square has opposite vertices at (-1, 2) and (7, 6). What is the area of the square?",
    "choices": ["20", "32", "40", "80"],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Opposite vertices determine the square's diagonal. For a square, area can be found from diagonal d using A = d<sup>2</sup>/2.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Compute diagonal length: d = √[(7 - (-1))<sup>2</sup> + (6 - 2)<sup>2</sup>] = √(8<sup>2</sup> + 4<sup>2</sup>) = √80.</p><p><strong>Step 2:</strong> Use area formula A = d<sup>2</sup>/2 = 80/2 = 40.</p><p><strong>Step 3:</strong> (Equivalent check) side = d/√2 = 2√10, and side<sup>2</sup> = 40.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Too small; equals half of the correct area.</p><p><strong>(B)</strong> Comes from misusing diagonal components.</p><p><strong>(C)</strong> Matches A = d<sup>2</sup>/2 with d<sup>2</sup> = 80.</p><p><strong>(D)</strong> Equals d<sup>2</sup>, not area of square.</p>"
  },
  {
    "id": 15,
    "passage": "Triangles ABC and DEF are similar, and AB/DE = 3/5. If the area of triangle ABC is 54, what is the area of triangle DEF?",
    "imageUrl": null,
    "question": "Triangles ABC and DEF are similar, and AB/DE = 3/5. If the area of triangle ABC is 54, what is the area of triangle DEF?",
    "choices": ["90", "120", "150", "180"],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>For similar triangles, the ratio of areas equals the square of the ratio of corresponding sides.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Given AB/DE = 3/5, area ratio is Area(ABC)/Area(DEF) = (3/5)<sup>2</sup> = 9/25.</p><p><strong>Step 2:</strong> Let Area(DEF) = x. Then 54/x = 9/25.</p><p><strong>Step 3:</strong> Cross multiply: 9x = 54 · 25.</p><p><strong>Step 4:</strong> x = (54 · 25)/9 = 6 · 25 = 150.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Too small for a triangle scaled up by 5/3 in side length.</p><p><strong>(B)</strong> Does not satisfy the 9:25 area ratio.</p><p><strong>(C)</strong> 150 gives 54/150 = 9/25.</p><p><strong>(D)</strong> Overestimates the required scale factor.</p>"
  },
  {
    "id": 16,
    "passage": "In triangle ABC, points D on AB and E on AC are such that DE is parallel to BC. If AD/AB = 3/5 and the area of trapezoid DBCE is 128, what is the area of triangle ABC?",
    "imageUrl": null,
    "question": "In triangle ABC, points D on AB and E on AC are such that DE is parallel to BC. If AD/AB = 3/5 and the area of trapezoid DBCE is 128, what is the area of triangle ABC?",
    "choices": ["160", "180", "200", "225"],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>If DE is parallel to BC, then triangle ADE is similar to triangle ABC. Area scales by the square of the side scale factor.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Similarity ratio is AD/AB = 3/5, so Area(ADE)/Area(ABC) = (3/5)<sup>2</sup> = 9/25.</p><p><strong>Step 2:</strong> Let total area Area(ABC) = T. Then Area(ADE) = (9/25)T.</p><p><strong>Step 3:</strong> Trapezoid DBCE area = T - (9/25)T = (16/25)T.</p><p><strong>Step 4:</strong> Given (16/25)T = 128, so T = 128 · 25/16 = 8 · 25 = 200.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Gives trapezoid area 102.4, not 128.</p><p><strong>(B)</strong> Gives trapezoid area 115.2, still low.</p><p><strong>(C)</strong> Produces exactly (16/25)(200) = 128.</p><p><strong>(D)</strong> Gives trapezoid area 144, too high.</p>"
  },
  {
    "id": 17,
    "passage": "A circle has radius 9. What is the length of the minor arc subtended by a central angle of 140 degrees?",
    "imageUrl": null,
    "question": "A circle has radius 9. What is the length of the minor arc subtended by a central angle of 140 degrees?",
    "choices": ["6π", "7π", "8π", "9π"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Arc length is the same fraction of circumference as central angle is of 360°. Use L = (θ/360) · 2πr.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Substitute θ = 140 and r = 9 into L = (θ/360) · 2πr.</p><p><strong>Step 2:</strong> L = (140/360) · 2π(9) = (140/360) · 18π.</p><p><strong>Step 3:</strong> Simplify 140/360 = 7/18, so L = (7/18) · 18π = 7π.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Slight underestimate from using wrong fraction.</p><p><strong>(B)</strong> Exactly matches the arc-length calculation.</p><p><strong>(C)</strong> Overestimate of the correct minor arc.</p><p><strong>(D)</strong> Would correspond to a 180° semicircle, not 140°.</p>"
  },
  {
    "id": 18,
    "passage": "In a circle of radius 12, a sector has area 24π. What is the length of the minor arc of that sector?",
    "imageUrl": null,
    "question": "In a circle of radius 12, a sector has area 24π. What is the length of the minor arc of that sector?",
    "choices": ["2π", "3π", "4π", "6π"],
    "correct": 2,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Sector area gives the central-angle fraction of the full circle area. Use that same fraction on circumference to get arc length.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Full circle area is π(12<sup>2</sup>) = 144π.</p><p><strong>Step 2:</strong> Sector fraction = 24π / 144π = 1/6, so the central angle is 60°.</p><p><strong>Step 3:</strong> Full circumference is 2π(12) = 24π.</p><p><strong>Step 4:</strong> Arc length = (1/6)(24π) = 4π.</p><p>The answer is <strong>C</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Too short; corresponds to only 1/12 of circumference.</p><p><strong>(B)</strong> Still short; corresponds to 1/8 of circumference.</p><p><strong>(C)</strong> Correctly uses the 1/6 sector fraction.</p><p><strong>(D)</strong> Too long; corresponds to 1/4 of circumference.</p>"
  },
  {
    "id": 19,
    "passage": "A square is inscribed in a circle. If the area of the square is 98, what is the area of the circle?",
    "imageUrl": null,
    "question": "A square is inscribed in a circle. If the area of the square is 98, what is the area of the circle?",
    "choices": ["42π", "49π", "56π", "98π"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>For a square inscribed in a circle, the square's diagonal equals the circle's diameter. Use square area to get side, then diameter and radius.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> If square area is 98, side s = √98 = 7√2.</p><p><strong>Step 2:</strong> Square diagonal d = s√2 = (7√2)(√2) = 14.</p><p><strong>Step 3:</strong> Circle diameter is 14, so radius r = 7.</p><p><strong>Step 4:</strong> Circle area = πr<sup>2</sup> = π(7<sup>2</sup>) = 49π.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Would require radius √42, not 7.</p><p><strong>(B)</strong> Correct area from r = 7.</p><p><strong>(C)</strong> Too large; does not follow from given square area.</p><p><strong>(D)</strong> Incorrectly treats square area as r<sup>2</sup>.</p>"
  },
  {
    "id": 20,
    "passage": "A circle is inscribed in a square whose perimeter is 40. What is the area inside the square but outside the circle?",
    "imageUrl": null,
    "question": "A circle is inscribed in a square whose perimeter is 40. What is the area inside the square but outside the circle?",
    "choices": ["100 - 20π", "100 - 25π", "100 - 50π", "100 - 10π"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>For an inscribed circle, the diameter equals the square's side. Desired region is square area minus circle area.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Square perimeter 40 gives side s = 40/4 = 10.</p><p><strong>Step 2:</strong> Square area = s<sup>2</sup> = 10<sup>2</sup> = 100.</p><p><strong>Step 3:</strong> Circle diameter is 10, so radius r = 5 and circle area = π(5<sup>2</sup>) = 25π.</p><p><strong>Step 4:</strong> Required area = 100 - 25π.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Uses radius incorrectly as 2√5 or similar mistake.</p><p><strong>(B)</strong> Correct difference between square and inscribed circle.</p><p><strong>(C)</strong> Subtracts too much; would require radius 5√2.</p><p><strong>(D)</strong> Subtracts too little; radius would be √10.</p>"
  },
  {
    "id": 21,
    "passage": "A 30-60-90 triangle has area 48√3. What is its perimeter?",
    "imageUrl": null,
    "question": "A 30-60-90 triangle has area 48√3. What is its perimeter?",
    "choices": ["8√6 + 4√2", "4√6(3 + √3)", "12√2 + 4√6", "24 + 8√3"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>In a 30-60-90 triangle, side ratios are x, x√3, and 2x. Area is (1/2)(x)(x√3) = x<sup>2</sup>√3/2.</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Set area equation: x<sup>2</sup>√3/2 = 48√3.</p><p><strong>Step 2:</strong> Cancel √3 and solve: x<sup>2</sup>/2 = 48, so x<sup>2</sup> = 96 and x = 4√6.</p><p><strong>Step 3:</strong> Side lengths are x = 4√6, x√3 = 4√18 = 12√2, and 2x = 8√6.</p><p><strong>Step 4:</strong> Perimeter = 4√6 + 12√2 + 8√6 = 12√6 + 12√2 = 4√6(3 + √3).</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Far too small for sides based on area 48√3.</p><p><strong>(B)</strong> Equivalent exact form of the computed perimeter.</p><p><strong>(C)</strong> Misses 8√6 from combining like radical terms correctly.</p><p><strong>(D)</strong> Non-equivalent expression with incompatible radical structure.</p>"
  },
  {
    "id": 22,
    "passage": "A right rectangular prism has side lengths 4, 6, and x. If its surface area is 208, what is the length of its space diagonal?",
    "imageUrl": null,
    "question": "A right rectangular prism has side lengths 4, 6, and x. If its surface area is 208, what is the length of its space diagonal?",
    "choices": ["2√26", "2√29", "4√13", "10"],
    "correct": 1,
    "explanation": "<h5>KEY CONCEPTS</h5><p>Surface area of a rectangular prism is 2(lw + lh + wh). Space diagonal is d = √(l<sup>2</sup> + w<sup>2</sup> + h<sup>2</sup>).</p><h5>SOLVING PROCESS</h5><p><strong>Step 1:</strong> Use SA formula: 2(4·6 + 4x + 6x) = 208.</p><p><strong>Step 2:</strong> Simplify: 2(24 + 10x) = 208, so 48 + 20x = 208.</p><p><strong>Step 3:</strong> Solve for x: 20x = 160, so x = 8.</p><p><strong>Step 4:</strong> Diagonal d = √(4<sup>2</sup> + 6<sup>2</sup> + 8<sup>2</sup>) = √(16 + 36 + 64) = √116 = 2√29.</p><p>The answer is <strong>B</strong>.</p><h5>WHY EACH CHOICE</h5><p><strong>(A)</strong> Would come from √104, not √116.</p><p><strong>(B)</strong> Correct simplification of √116.</p><p><strong>(C)</strong> Equals √208, not the space diagonal.</p><p><strong>(D)</strong> Too small; diagonal exceeds largest edge 8 by more than 2.</p>"
  }
];

void geometryQuestions;
