// biome-ignore lint/correctness/noUnusedVariables: consumed by app scripts at runtime.
const graphHardQuestions = [
  {
    id: 1,
    passage: "Researchers tracked the percentage of commuters in four cities who used public transit in 2022 and 2024.<br><br><table><tr><th>City</th><th>2022</th><th>2024</th></tr><tr><td>Aster</td><td>28%</td><td>34%</td></tr><tr><td>Brill</td><td>41%</td><td>43%</td></tr><tr><td>Canto</td><td>19%</td><td>27%</td></tr><tr><td>Dorne</td><td>35%</td><td>36%</td></tr></table>",
    question: "A student claims that the largest increase did not occur in the city with the highest 2024 transit share. Which choice best supports the claim?",
    choices: [
      "Brill had the highest transit share in 2024, and its increase was 2 percentage points.",
      "Canto's transit share increased by 8 percentage points, while Brill had the highest 2024 share at 43%.",
      "Aster's 2024 share was lower than Brill's but higher than Canto's.",
      "Dorne's transit share increased by just 1 percentage point between 2022 and 2024."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>The city with the highest 2024 share is Brill (43%), but the largest increase is Canto's jump from 19% to 27%, which is 8 percentage points. That directly proves the highest final share and the largest increase occurred in different cities."
  },
  {
    id: 2,
    passage: "An ecologist compared average seedling survival rates under three watering schedules.<br><br><table><tr><th>Schedule</th><th>Spring</th><th>Summer</th></tr><tr><td>Low</td><td>72%</td><td>55%</td></tr><tr><td>Medium</td><td>79%</td><td>68%</td></tr><tr><td>High</td><td>81%</td><td>64%</td></tr></table>",
    question: "Which choice most effectively uses the table to support the conclusion that increasing water from medium to high did not produce the strongest summer outcome?",
    choices: [
      "Low watering produced the worst summer survival rate at 55%.",
      "High watering produced the best spring survival rate at 81%.",
      "Medium watering produced a higher summer survival rate (68%) than high watering did (64%).",
      "The difference between low and medium watering was larger in summer than in spring."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>The claim is specifically about summer outcomes. In summer, medium watering yields 68%, which is better than high watering's 64%, so more water did not produce the best summer result."
  },
  {
    id: 3,
    passage: "A company recorded average delivery times for two shipping methods in three regions.<br><br><table><tr><th>Region</th><th>Standard</th><th>Express</th></tr><tr><td>North</td><td>4.8 days</td><td>3.1 days</td></tr><tr><td>Central</td><td>5.0 days</td><td>3.9 days</td></tr><tr><td>South</td><td>4.3 days</td><td>2.6 days</td></tr></table>",
    question: "A logistics manager argues that the region with the slowest standard shipping also showed the smallest benefit from upgrading to express. Which choice best supports the argument?",
    choices: [
      "North's express shipping time was 3.1 days.",
      "South had the fastest express shipping time overall.",
      "The standard-to-express reduction was 1.1 days in Central, smaller than the reductions in North and South.",
      "Central had the slowest standard shipping time at 5.0 days, and its reduction to express was only 1.1 days."
    ],
    correct: 3,
    explanation: "<strong>Correct Answer: D</strong><br><br>Central has the slowest standard time (5.0 days). Its reduction to express is 5.0 - 3.9 = 1.1 days, which is smaller than North's 1.7 and South's 1.7. That directly supports the claim."
  },
  {
    id: 4,
    passage: "A museum tracked attendance at four exhibits in the first and fourth weeks after opening.<br><br><table><tr><th>Exhibit</th><th>Week 1</th><th>Week 4</th></tr><tr><td>Maps</td><td>920</td><td>760</td></tr><tr><td>Glass</td><td>780</td><td>810</td></tr><tr><td>Textiles</td><td>840</td><td>700</td></tr><tr><td>Coins</td><td>610</td><td>690</td></tr></table>",
    question: "Which choice best supports the conclusion that only exhibits with lower opening attendance showed growth by week 4?",
    choices: [
      "Maps and Textiles both lost visitors between week 1 and week 4.",
      "Glass gained 30 visitors and Coins gained 80, whereas the higher-opening Maps and Textiles both declined.",
      "Coins had the lowest attendance in week 1.",
      "Textiles ended week 4 with fewer visitors than Glass did."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Glass and Coins are the lower-opening exhibits, and both gained visitors by week 4, whereas the higher-opening Maps and Textiles both declined. That directly supports the claim that only the lower-opening exhibits showed growth."
  },
  {
    id: 5,
    passage: "A nutritionist compared average daily sugar intake before and after a school lunch policy change.<br><br><table><tr><th>Grade</th><th>Before</th><th>After</th></tr><tr><td>6</td><td>42 g</td><td>35 g</td></tr><tr><td>7</td><td>47 g</td><td>40 g</td></tr><tr><td>8</td><td>45 g</td><td>34 g</td></tr><tr><td>9</td><td>50 g</td><td>44 g</td></tr></table>",
    question: "A student argues that the policy's largest reduction occurred neither in the grade with the highest starting level nor in the grade with the highest ending level. Which choice best supports the argument?",
    choices: [
      "Grade 9 had the highest sugar intake both before and after the policy change.",
      "Grade 8 fell by 11 g, while Grade 9 had the highest values before and after the change.",
      "Grade 6 ended with 35 g after the policy change.",
      "Grade 7 and Grade 9 each fell by less than Grade 8 did."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Grade 9 is highest before (50 g) and after (44 g), but the largest drop is Grade 8's decline from 45 g to 34 g, or 11 g. So the largest reduction occurred in a different grade."
  },
  {
    id: 6,
    passage: "A lab measured average battery life under three screen-brightness settings for a new tablet.<br><br><table><tr><th>Brightness</th><th>Video Playback</th><th>Web Browsing</th></tr><tr><td>30%</td><td>11.2 h</td><td>12.4 h</td></tr><tr><td>60%</td><td>9.0 h</td><td>10.1 h</td></tr><tr><td>90%</td><td>7.4 h</td><td>7.9 h</td></tr></table>",
    question: "Which choice most effectively supports the claim that raising brightness from 60% to 90% reduced browsing time more sharply than it reduced video-playback time?",
    choices: [
      "Both activities showed lower battery life at 90% than at 60% brightness.",
      "Browsing time fell by 2.2 hours, whereas video-playback time fell by 1.6 hours.",
      "Browsing time fell by 2.2 hours, whereas video-playback time fell by 1.6 hours, so browsing declined more sharply.",
      "At 60% brightness, browsing already lasted longer than video playback did."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>From 60% to 90%, browsing drops from 10.1 to 7.9 hours (2.2 h), while video playback drops from 9.0 to 7.4 hours (1.6 h). That means browsing, not video playback, declined more sharply, so choice C gives the decisive comparison."
  },
  {
    id: 7,
    passage: "An education researcher recorded the share of students passing a certification exam on the first try and after one retake.<br><br><table><tr><th>Program</th><th>First Try</th><th>After Retake</th></tr><tr><td>A</td><td>58%</td><td>74%</td></tr><tr><td>B</td><td>66%</td><td>79%</td></tr><tr><td>C</td><td>61%</td><td>83%</td></tr><tr><td>D</td><td>70%</td><td>81%</td></tr></table>",
    question: "Which choice best supports the claim that the program with the greatest improvement was not the one with the highest first-try pass rate?",
    choices: [
      "Program D had the highest first-try pass rate at 70%.",
      "Program C improved by 22 percentage points, whereas Program D had the highest first-try rate at 70%.",
      "Program A ended below Program C after the retake.",
      "Programs B and D both ended above 79% after the retake."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Program D has the highest first-try pass rate at 70%, but Program C shows the greatest improvement, rising from 61% to 83% for a 22-point gain. That directly supports the claim."
  },
  {
    id: 8,
    passage: "A city compared monthly water use before and after installing smart meters in four districts.<br><br><table><tr><th>District</th><th>Before</th><th>After</th></tr><tr><td>East</td><td>118</td><td>101</td></tr><tr><td>West</td><td>132</td><td>121</td></tr><tr><td>North</td><td>124</td><td>103</td></tr><tr><td>South</td><td>116</td><td>109</td></tr></table><br><small>Values are in millions of liters.</small>",
    question: "A planner says the largest decrease occurred in a district that did not start with the highest water use. Which choice best supports the planner's statement?",
    choices: [
      "West started highest at 132 million liters.",
      "North fell by 21 million liters, while West started highest at 132 million liters.",
      "East used 101 million liters after smart meters were installed.",
      "South showed the smallest decrease of the four districts."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>West starts highest at 132 million liters, but North records the biggest decrease, dropping from 124 to 103, or 21 million liters. That directly supports the planner's statement."
  },
  {
    id: 9,
    passage: "A finance team tracked quarterly operating margins for three stores.<br><br><table><tr><th>Store</th><th>Q1</th><th>Q2</th></tr><tr><td>Harbor</td><td>12%</td><td>16%</td></tr><tr><td>Market</td><td>15%</td><td>17%</td></tr><tr><td>Ridge</td><td>11%</td><td>18%</td></tr></table>",
    question: "Which choice most effectively supports the claim that the store with the lowest starting margin finished with the highest margin?",
    choices: [
      "Ridge began at 11% and rose to 18%, the highest Q2 margin in the table.",
      "Harbor improved by 4 percentage points.",
      "Market had the highest Q1 margin at 15%.",
      "All three stores improved from Q1 to Q2."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Ridge has the lowest starting margin at 11% and the highest Q2 margin at 18%. That directly supports the claim."
  },
  {
    id: 10,
    passage: "A public-health team measured vaccination rates in four counties before and after a mobile-clinic initiative.<br><br><table><tr><th>County</th><th>Before</th><th>After</th></tr><tr><td>Lake</td><td>61%</td><td>76%</td></tr><tr><td>Pine</td><td>68%</td><td>80%</td></tr><tr><td>Mesa</td><td>57%</td><td>75%</td></tr><tr><td>River</td><td>64%</td><td>73%</td></tr></table>",
    question: "A student argues that the biggest gain occurred in the county with the lowest initial rate, not in the county with the highest final rate. Which choice best supports the argument?",
    choices: [
      "Pine ended highest at 80%.",
      "Mesa started lowest at 57% and gained 18 percentage points, while Pine finished highest at 80%.",
      "Lake gained 15 percentage points.",
      "River remained below Pine after the initiative."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Mesa starts with the lowest vaccination rate at 57% and gains 18 points, the largest increase, while Pine ends highest at 80%. That directly supports the argument."
  },
  {
    id: 11,
    passage: "An economist compared the percentage of household spending devoted to housing and transportation in four metro areas.<br><br><table><tr><th>Metro</th><th>Housing</th><th>Transportation</th></tr><tr><td>Elm</td><td>31%</td><td>14%</td></tr><tr><td>Grove</td><td>28%</td><td>19%</td></tr><tr><td>Vale</td><td>35%</td><td>11%</td></tr><tr><td>Stone</td><td>26%</td><td>21%</td></tr></table>",
    question: "Which choice most effectively supports the conclusion that the metro area with the highest housing share had the lowest transportation share?",
    choices: [
      "Vale devoted 35% to housing and 11% to transportation.",
      "Stone had the lowest housing share but the highest transportation share.",
      "Elm spent more on housing than on transportation.",
      "Grove and Stone both spent at least 19% on transportation."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Vale devotes the highest share to housing (35%) and the lowest share to transportation (11%). That directly supports the conclusion."
  },
  {
    id: 12,
    passage: "A publisher tracked average reading time per article on desktop and mobile devices.<br><br><table><tr><th>Section</th><th>Desktop</th><th>Mobile</th></tr><tr><td>Science</td><td>5.8 min</td><td>4.1 min</td></tr><tr><td>Arts</td><td>4.9 min</td><td>4.4 min</td></tr><tr><td>Business</td><td>6.1 min</td><td>4.0 min</td></tr><tr><td>Travel</td><td>5.0 min</td><td>4.7 min</td></tr></table>",
    question: "A media analyst claims that the smallest desktop-to-mobile drop did not occur in the section with the highest desktop reading time. Which choice best supports that claim?",
    choices: [
      "Business had the highest desktop reading time at 6.1 minutes.",
      "Travel fell by only 0.3 minute, whereas Business had the highest desktop reading time at 6.1 minutes.",
      "Science lost 1.7 minutes from desktop to mobile.",
      "Arts and Travel both retained more than 4 minutes on mobile."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Business has the highest desktop reading time at 6.1 minutes, but Travel shows the smallest drop from desktop to mobile, falling by only 0.3 minute. That directly supports the claim."
  },
  {
    id: 13,
    passage: "A botanist measured average leaf length in sun and shade plots for four species.<br><br><table><tr><th>Species</th><th>Sun</th><th>Shade</th></tr><tr><td>Iris</td><td>8.4 cm</td><td>10.1 cm</td></tr><tr><td>Larkspur</td><td>11.2 cm</td><td>12.0 cm</td></tr><tr><td>Mint</td><td>7.9 cm</td><td>10.4 cm</td></tr><tr><td>Poppy</td><td>9.8 cm</td><td>10.3 cm</td></tr></table>",
    question: "Which choice best supports the claim that the species with the shortest leaves in sun plots showed the largest increase in shade?",
    choices: [
      "Mint had the shortest sun-plot leaves at 7.9 cm and increased by 2.5 cm in shade, more than any other species.",
      "Iris also showed longer leaves in shade than in sun.",
      "Larkspur had the longest leaves in both conditions.",
      "Poppy increased by only 0.5 cm between the two conditions."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Mint has the shortest leaves in sun plots at 7.9 cm and the largest increase in shade, growing to 10.4 cm for a gain of 2.5 cm. That directly supports the claim."
  },
  {
    id: 14,
    passage: "A retail analyst compared online and in-store return rates for four product categories.<br><br><table><tr><th>Category</th><th>Online</th><th>In-store</th></tr><tr><td>Shoes</td><td>14%</td><td>8%</td></tr><tr><td>Coats</td><td>11%</td><td>6%</td></tr><tr><td>Bags</td><td>7%</td><td>5%</td></tr><tr><td>Watches</td><td>5%</td><td>4%</td></tr></table>",
    question: "A manager claims that the category with the highest online return rate also had the largest gap between online and in-store returns. Which choice most effectively supports the claim?",
    choices: [
      "Shoes had the highest online return rate at 14%.",
      "Watches had the smallest gap between online and in-store returns.",
      "Shoes had a 6-point gap (14% vs. 8%), larger than the gap in any other category.",
      "Coats also had a return-rate gap of more than 4 percentage points."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>Shoes has the highest online return rate (14%) and its online/in-store gap is 6 points, larger than Coats' 5, Bags' 2, and Watches' 1. That directly supports the claim."
  },
  {
    id: 15,
    passage: "A historian compared the populations of four towns in 1900 and 1930.<br><br><table><tr><th>Town</th><th>1900</th><th>1930</th></tr><tr><td>Arden</td><td>12,400</td><td>14,100</td></tr><tr><td>Briar</td><td>9,800</td><td>13,600</td></tr><tr><td>Cedar</td><td>15,300</td><td>16,200</td></tr><tr><td>Dover</td><td>11,900</td><td>12,800</td></tr></table>",
    question: "Which choice best supports the conclusion that the town with the lowest 1900 population experienced the largest increase by 1930?",
    choices: [
      "Briar began at 9,800 and grew by 3,800, more than any other town.",
      "Cedar remained the largest town in 1930.",
      "Arden and Dover each grew by less than 2,000 people.",
      "Briar ended with fewer residents than Cedar in 1930."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Briar has the lowest 1900 population at 9,800 and the largest increase by 1930, gaining 3,800 residents. That directly supports the conclusion."
  },
  {
    id: 16,
    passage: "A wildlife survey measured average nesting success for four bird species before and after invasive-predator controls.<br><br><table><tr><th>Species</th><th>Before</th><th>After</th></tr><tr><td>Tern</td><td>46%</td><td>63%</td></tr><tr><td>Gull</td><td>51%</td><td>62%</td></tr><tr><td>Plover</td><td>39%</td><td>61%</td></tr><tr><td>Skimmer</td><td>44%</td><td>57%</td></tr></table>",
    question: "A student argues that the species with the lowest initial success improved the most but still did not end highest. Which choice best supports the argument?",
    choices: [
      "Plover started lowest at 39% and improved by 22 points, while Tern ended highest at 63%.",
      "Tern ended above all other species after predator controls.",
      "Skimmer improved by 13 points.",
      "Gull finished at 62%, one point below Tern."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Plover begins lowest (39%) and gains the most (22 points), but Tern finishes highest at 63%. That directly supports the argument."
  },
  {
    id: 17,
    passage: "A theater company recorded average ticket sales for four productions in preview week and opening month.<br><br><table><tr><th>Production</th><th>Preview Week</th><th>Opening Month</th></tr><tr><td>Atlas</td><td>410</td><td>620</td></tr><tr><td>Bloom</td><td>530</td><td>690</td></tr><tr><td>Current</td><td>390</td><td>640</td></tr><tr><td>Drift</td><td>470</td><td>610</td></tr></table>",
    question: "Which choice most effectively supports the claim that the production with the fewest preview-week sales did not have the most opening-month sales but did have the largest increase?",
    choices: [
      "Bloom had the highest opening-month sales at 690 tickets.",
      "Current started lowest at 390 and increased by 250 tickets, while Bloom had the highest opening-month total.",
      "Atlas increased by 210 tickets from preview week to opening month.",
      "Drift sold fewer tickets than Bloom in opening month."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Current has the fewest preview-week sales (390), gains the most (640 - 390 = 250), but Bloom has the highest opening-month total (690). That matches the claim exactly."
  },
  {
    id: 18,
    passage: "A transport planner compared average subway delay minutes per 1,000 riders before and after signal upgrades.<br><br><table><tr><th>Line</th><th>Before</th><th>After</th></tr><tr><td>Red</td><td>18.4</td><td>11.9</td></tr><tr><td>Blue</td><td>15.1</td><td>10.8</td></tr><tr><td>Green</td><td>20.0</td><td>14.4</td></tr><tr><td>Gold</td><td>13.8</td><td>10.1</td></tr></table>",
    question: "A report states that the line with the worst pre-upgrade performance did not achieve the largest improvement. Which choice best supports the report?",
    choices: [
      "Green had the worst pre-upgrade performance at 20.0 delay minutes.",
      "Red improved by 6.5 minutes, more than Green's 5.6-minute improvement, even though Green started worst.",
      "Gold had the best post-upgrade performance at 10.1 minutes.",
      "Blue and Gold both finished below 11 delay minutes."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Green has the worst pre-upgrade performance at 20.0 delay minutes, but Red improves by 6.5 minutes, more than Green's 5.6-minute improvement. That directly supports the report."
  },
  {
    id: 19,
    passage: "A retailer tracked conversion rates for four ad campaigns on desktop and mobile platforms.<br><br><table><tr><th>Campaign</th><th>Desktop</th><th>Mobile</th></tr><tr><td>Oak</td><td>3.4%</td><td>4.1%</td></tr><tr><td>Pine</td><td>4.5%</td><td>4.8%</td></tr><tr><td>Quartz</td><td>2.9%</td><td>4.3%</td></tr><tr><td>Reed</td><td>3.8%</td><td>4.0%</td></tr></table>",
    question: "Which choice best supports the claim that the lowest desktop-performing campaign did not remain lowest on mobile and instead showed the largest mobile gain?",
    choices: [
      "Quartz rose from 2.9% on desktop to 4.3% on mobile, the largest gain among the campaigns.",
      "Pine still had the highest conversion rate on mobile at 4.8%.",
      "Oak improved by 0.7 percentage point on mobile.",
      "Reed's mobile conversion rate exceeded Oak's only slightly."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Quartz is the lowest-performing campaign on desktop at 2.9% and then rises to 4.3% on mobile, the largest gain among the campaigns. That supports the claim directly."
  },
  {
    id: 20,
    passage: "A demographer compared the percentage of residents over age 65 in four regions in 2010 and 2020.<br><br><table><tr><th>Region</th><th>2010</th><th>2020</th></tr><tr><td>North Coast</td><td>14%</td><td>18%</td></tr><tr><td>High Plains</td><td>11%</td><td>17%</td></tr><tr><td>Lake Belt</td><td>16%</td><td>20%</td></tr><tr><td>River Bend</td><td>13%</td><td>16%</td></tr></table>",
    question: "Which choice most effectively supports the claim that the region with the youngest population in 2010 experienced the largest increase by 2020?",
    choices: [
      "Lake Belt had the oldest population in both years.",
      "High Plains rose from 11% to 17%, an increase of 6 points, larger than any other region's increase.",
      "North Coast and Lake Belt each increased by 4 points.",
      "River Bend remained below North Coast in 2020."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>High Plains has the youngest population in 2010 at 11% and then increases to 17%, a 6-point rise that is larger than any other region's increase."
  },
  {
    id: 21,
    passage: "A fisheries analyst measured average catch per trip before and after a seasonal quota change.<br><br><table><tr><th>Port</th><th>Before</th><th>After</th></tr><tr><td>Jetty</td><td>84 kg</td><td>79 kg</td></tr><tr><td>Marsh</td><td>76 kg</td><td>82 kg</td></tr><tr><td>Pier</td><td>88 kg</td><td>80 kg</td></tr><tr><td>Shoal</td><td>71 kg</td><td>81 kg</td></tr></table>",
    question: "A student argues that the lowest-performing port before the quota change became neither the highest nor the lowest afterward, despite showing the largest improvement. Which choice best supports the argument?",
    choices: [
      "Shoal rose from 71 kg to 81 kg, a 10-kg gain, but Marsh ended highest at 82 kg and Jetty ended lowest at 79 kg.",
      "Pier declined by 8 kg after the quota change.",
      "Marsh also improved after the quota change.",
      "Jetty and Pier both ended below Shoal."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Shoal starts lowest at 71 kg and improves by 10 kg, the largest gain. After the change, Marsh is highest at 82 kg and Jetty is lowest at 79 kg, so Shoal finishes neither highest nor lowest."
  },
  {
    id: 22,
    passage: "A campus energy office measured electricity use in four residence halls before and after LED retrofits.<br><br><table><tr><th>Hall</th><th>Before</th><th>After</th></tr><tr><td>Elm</td><td>142 MWh</td><td>121 MWh</td></tr><tr><td>Fir</td><td>156 MWh</td><td>138 MWh</td></tr><tr><td>Maple</td><td>149 MWh</td><td>123 MWh</td></tr><tr><td>Oak</td><td>138 MWh</td><td>124 MWh</td></tr></table>",
    question: "Which choice best supports the conclusion that the greatest reduction occurred in a hall that neither started highest nor ended lowest?",
    choices: [
      "Fir started highest at 156 MWh.",
      "Maple reduced electricity use by 26 MWh, more than any other hall, while Elm ended lowest at 121 MWh.",
      "Oak started with the lowest electricity use at 138 MWh.",
      "Elm and Maple both ended below 125 MWh after the retrofit."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Maple reduces electricity use by 26 MWh, the greatest drop. Fir starts highest at 156 MWh, and Elm ends lowest at 121 MWh, so Maple is neither of those."
  },
  {
    id: 23,
    passage: "A survey compared average weekly exercise time for employees working in-office and remotely in four departments.<br><br><table><tr><th>Department</th><th>In-office</th><th>Remote</th></tr><tr><td>Design</td><td>3.1 h</td><td>4.5 h</td></tr><tr><td>Finance</td><td>2.8 h</td><td>3.6 h</td></tr><tr><td>IT</td><td>2.5 h</td><td>4.4 h</td></tr><tr><td>Legal</td><td>3.4 h</td><td>4.0 h</td></tr></table>",
    question: "A manager claims that the department with the lowest in-office exercise time showed the largest increase under remote work but still did not have the highest remote-work value. Which choice best supports the claim?",
    choices: [
      "IT rose from 2.5 to 4.4 hours, the largest increase, while Design had the highest remote-work value at 4.5 hours.",
      "Legal had the highest in-office exercise time at 3.4 hours.",
      "Finance increased by only 0.8 hour under remote work.",
      "Design and IT both exceeded 4 hours remotely."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>IT starts lowest in-office at 2.5 hours, increases the most to 4.4 hours, and still finishes below Design's remote-work value of 4.5 hours."
  },
  {
    id: 24,
    passage: "A manufacturer recorded defect rates for four assembly lines before and after introducing machine-vision checks.<br><br><table><tr><th>Line</th><th>Before</th><th>After</th></tr><tr><td>1</td><td>4.8%</td><td>2.9%</td></tr><tr><td>2</td><td>5.2%</td><td>3.8%</td></tr><tr><td>3</td><td>4.1%</td><td>2.3%</td></tr><tr><td>4</td><td>3.9%</td><td>2.6%</td></tr></table>",
    question: "Which choice most effectively supports the claim that the line with the highest initial defect rate did not achieve the greatest reduction?",
    choices: [
      "Line 2 started highest at 5.2%.",
      "Line 3 achieved the lowest defect rate after the checks were introduced.",
      "Line 1 and Line 3 each reduced defects by 1.9 and 1.8 points, respectively.",
      "Line 1 reduced defects by 1.9 points, which exceeds Line 2's 1.4-point reduction even though Line 2 started highest."
    ],
    correct: 3,
    explanation: "<strong>Correct Answer: D</strong><br><br>Line 2 starts with the highest defect rate at 5.2%, but Line 1 reduces defects by 1.9 points, which is greater than Line 2's 1.4-point reduction. That directly supports the claim."
  },
  {
    id: 25,
    passage: "An agricultural study compared crop yield under four fertilizer blends.<br><br><table><tr><th>Blend</th><th>Corn</th><th>Soybeans</th></tr><tr><td>Alpha</td><td>8.2 t/ha</td><td>3.7 t/ha</td></tr><tr><td>Beta</td><td>7.9 t/ha</td><td>4.1 t/ha</td></tr><tr><td>Gamma</td><td>8.5 t/ha</td><td>3.5 t/ha</td></tr><tr><td>Delta</td><td>7.6 t/ha</td><td>4.0 t/ha</td></tr></table>",
    question: "A researcher claims that the blend producing the highest corn yield produced the lowest soybean yield. Which choice best supports the claim?",
    choices: [
      "Gamma produced 8.5 t/ha of corn and 3.5 t/ha of soybeans.",
      "Beta and Delta both produced at least 4.0 t/ha of soybeans.",
      "Alpha outperformed Delta in corn yield.",
      "Gamma was the only blend above 8.4 t/ha for corn."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Gamma has the highest corn yield at 8.5 t/ha and the lowest soybean yield at 3.5 t/ha. That directly supports the researcher's claim."
  },
  {
    id: 26,
    passage: "A tourism board tracked average hotel occupancy in four resort towns in January and July.<br><br><table><tr><th>Town</th><th>January</th><th>July</th></tr><tr><td>Bayview</td><td>62%</td><td>88%</td></tr><tr><td>Crest</td><td>71%</td><td>84%</td></tr><tr><td>Dunes</td><td>58%</td><td>86%</td></tr><tr><td>Harbor Point</td><td>65%</td><td>82%</td></tr></table>",
    question: "Which choice best supports the conclusion that the town with the lowest January occupancy showed the largest increase but still did not end highest in July?",
    choices: [
      "Bayview had the highest July occupancy at 88%.",
      "Dunes increased by 28 points, the largest rise, while Bayview ended highest in July at 88%.",
      "Crest increased by only 13 points from January to July.",
      "Harbor Point stayed below Crest in both months."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Dunes has the lowest January occupancy at 58% and the largest increase, rising 28 points to 86%. Bayview ends highest in July at 88%, so Dunes does not finish highest."
  },
  {
    id: 27,
    passage: "A climatologist compared average annual snowfall and average number of snow days in four cities.<br><br><table><tr><th>City</th><th>Snowfall</th><th>Snow Days</th></tr><tr><td>Alta</td><td>104 cm</td><td>22</td></tr><tr><td>Birch</td><td>88 cm</td><td>29</td></tr><tr><td>Cairn</td><td>119 cm</td><td>18</td></tr><tr><td>Drake</td><td>76 cm</td><td>24</td></tr></table>",
    question: "A student claims that the city with the most snowfall did not have the most snow days. Which choice most effectively supports the claim?",
    choices: [
      "Cairn had the greatest snowfall at 119 cm, but Birch had the most snow days at 29.",
      "Alta had more snowfall than Birch did.",
      "Drake had fewer snow days than Birch did.",
      "Birch had fewer centimeters of snowfall than Cairn did."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Cairn has the greatest snowfall at 119 cm, but Birch has the most snow days at 29. That directly supports the student's claim."
  },
  {
    id: 28,
    passage: "A hospital compared average emergency-department wait times before and after a triage redesign.<br><br><table><tr><th>Hospital</th><th>Before</th><th>After</th></tr><tr><td>North</td><td>54 min</td><td>41 min</td></tr><tr><td>South</td><td>61 min</td><td>50 min</td></tr><tr><td>East</td><td>57 min</td><td>39 min</td></tr><tr><td>West</td><td>49 min</td><td>38 min</td></tr></table>",
    question: "Which choice best supports the conclusion that the largest reduction occurred at a hospital that did not start with the longest wait time and did not finish with the shortest wait time?",
    choices: [
      "South had the longest wait time before the redesign at 61 minutes.",
      "East reduced waits by 18 minutes, more than any other hospital, while West finished shortest at 38 minutes.",
      "North reduced waits by 13 minutes.",
      "West began with the shortest wait time before the redesign."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>East reduces wait times by 18 minutes, more than any other hospital. South starts with the longest wait time, and West finishes with the shortest one, so East is neither of those."
  },
  {
    id: 29,
    passage: "A labor economist recorded average hourly wages in four sectors in 2018 and 2024.<br><br><table><tr><th>Sector</th><th>2018</th><th>2024</th></tr><tr><td>Retail</td><td>$14.20</td><td>$18.10</td></tr><tr><td>Health</td><td>$23.40</td><td>$28.20</td></tr><tr><td>Logistics</td><td>$17.10</td><td>$23.30</td></tr><tr><td>Hospitality</td><td>$13.80</td><td>$19.90</td></tr></table>",
    question: "Which choice most effectively supports the claim that the lowest-paying sector in 2018 was not the highest-paying sector in 2024 even though it experienced the second-largest wage gain?",
    choices: [
      "Health remained the highest-paying sector in 2024 at $28.20 per hour.",
      "Hospitality rose by $6.10 per hour, second only to Logistics, while Health remained highest in 2024.",
      "Retail gained less than Hospitality did.",
      "Logistics gained $6.20 per hour between 2018 and 2024."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Hospitality is lowest in 2018 ($13.80), gains $6.10 (second-largest), but Health is still highest in 2024. That directly supports the claim."
  },
  {
    id: 30,
    passage: "A chemist measured reaction yield under four catalysts at two temperatures.<br><br><table><tr><th>Catalyst</th><th>40°C</th><th>60°C</th></tr><tr><td>K</td><td>68%</td><td>74%</td></tr><tr><td>L</td><td>64%</td><td>79%</td></tr><tr><td>M</td><td>71%</td><td>76%</td></tr><tr><td>N</td><td>63%</td><td>72%</td></tr></table>",
    question: "A researcher claims that the catalyst with the lowest yield at 40°C produced the largest increase at 60°C but still did not end highest overall. Which choice best supports the claim?",
    choices: [
      "Catalyst N started lowest at 63%.",
      "Catalyst L ended highest at 79% at 60°C.",
      "Catalyst N increased by 9 points, while Catalyst L ended highest at 79%.",
      "Catalyst M improved by only 5 points between the two temperatures."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>N starts lowest (63%) and rises by 9 points, but L ends highest at 79%. That exactly supports the claim."
  },
  {
    id: 31,
    passage: "A school district compared absenteeism rates in four schools before and after expanding mental-health support.<br><br><table><tr><th>School</th><th>Before</th><th>After</th></tr><tr><td>A</td><td>9.2%</td><td>7.1%</td></tr><tr><td>B</td><td>8.5%</td><td>6.0%</td></tr><tr><td>C</td><td>10.1%</td><td>7.8%</td></tr><tr><td>D</td><td>7.9%</td><td>6.3%</td></tr></table>",
    question: "Which choice best supports the claim that the school with the highest absenteeism before the program did not show the largest reduction afterward?",
    choices: [
      "School C started highest at 10.1% absenteeism.",
      "School B reduced absenteeism by 2.5 points, slightly more than School C's 2.3-point reduction, even though School C started highest.",
      "School D had the lowest absenteeism rate before the program.",
      "School B ended with the lowest absenteeism rate after the program."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>School C starts highest at 10.1%, but School B reduces absenteeism by 2.5 points, slightly more than School C's 2.3-point reduction. That supports the claim directly."
  },
  {
    id: 32,
    passage: "A marine scientist tracked average coral cover at four reefs before and after fishing restrictions.<br><br><table><tr><th>Reef</th><th>Before</th><th>After</th></tr><tr><td>Indigo</td><td>22%</td><td>31%</td></tr><tr><td>Jade</td><td>27%</td><td>33%</td></tr><tr><td>Khaki</td><td>19%</td><td>30%</td></tr><tr><td>Lapis</td><td>24%</td><td>29%</td></tr></table>",
    question: "Which choice most effectively supports the conclusion that the reef with the lowest initial coral cover showed the largest increase but did not end with the highest final coral cover?",
    choices: [
      "Jade ended highest at 33% coral cover.",
      "Khaki rose from 19% to 30%, an 11-point increase, while Jade ended highest at 33%.",
      "Indigo also gained more than 8 percentage points.",
      "Lapis remained below Indigo after the restrictions."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Khaki starts with the lowest coral cover at 19% and gains 11 points, the largest increase. Jade ends highest at 33%, so Khaki does not finish highest."
  },
  {
    id: 33,
    passage: "A bookstore compared average monthly sales of four genres before and after rearranging store displays.<br><br><table><tr><th>Genre</th><th>Before</th><th>After</th></tr><tr><td>Mystery</td><td>420</td><td>495</td></tr><tr><td>History</td><td>365</td><td>470</td></tr><tr><td>Science</td><td>390</td><td>460</td></tr><tr><td>Poetry</td><td>310</td><td>405</td></tr></table>",
    question: "A manager claims that the lowest-selling genre before the rearrangement remained lowest afterward but had a larger increase than Science. Which choice best supports the claim?",
    choices: [
      "Poetry was lowest before the rearrangement at 310 sales.",
      "Poetry increased by 95 sales, which is larger than Science's 70-sale increase, and Poetry still had the lowest final total at 405 sales.",
      "Mystery remained the best-selling genre after the rearrangement.",
      "Science finished with 460 monthly sales after the rearrangement."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Poetry starts lowest at 310 sales, remains lowest afterward at 405 sales, and still gains 95 sales, which is larger than Science's 70-sale increase. That directly supports the revised claim."
  },
  {
    id: 34,
    passage: "A university measured average lab completion times for four student groups before and after a software tutorial.<br><br><table><tr><th>Group</th><th>Before</th><th>After</th></tr><tr><td>Alpha</td><td>74 min</td><td>61 min</td></tr><tr><td>Beta</td><td>81 min</td><td>70 min</td></tr><tr><td>Gamma</td><td>69 min</td><td>55 min</td></tr><tr><td>Delta</td><td>77 min</td><td>65 min</td></tr></table>",
    question: "Which choice best supports the conclusion that the fastest group after the tutorial was also the group with the greatest time reduction?",
    choices: [
      "Gamma finished fastest after the tutorial at 55 minutes.",
      "Gamma reduced completion time by 14 minutes, more than any other group, and also finished fastest at 55 minutes.",
      "Alpha finished ahead of Delta after the tutorial.",
      "Beta remained the slowest group after the tutorial."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Gamma finishes fastest after the tutorial at 55 minutes and also shows the largest reduction, improving by 14 minutes. That directly supports the conclusion."
  },
  {
    id: 35,
    passage: "A city agency compared average park visits per household before and after adding weekend programming.<br><br><table><tr><th>Neighborhood</th><th>Before</th><th>After</th></tr><tr><td>Hills</td><td>3.1</td><td>4.4</td></tr><tr><td>Market</td><td>2.7</td><td>4.0</td></tr><tr><td>Riverside</td><td>3.5</td><td>4.2</td></tr><tr><td>West End</td><td>2.4</td><td>4.1</td></tr></table>",
    question: "Which choice most effectively supports the claim that the lowest-use neighborhood before the programming change experienced the largest increase but still did not finish highest?",
    choices: [
      "West End rose from 2.4 to 4.1 visits, the largest increase, while Hills finished highest at 4.4 visits.",
      "Riverside started with the highest pre-programming usage.",
      "Market also increased by more than 1 visit per household.",
      "Hills ended above both Market and West End after the change."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>West End starts lowest at 2.4 visits, improves the most to 4.1, and still finishes below Hills at 4.4. That directly supports the claim."
  },
  {
    id: 36,
    passage: "An air-quality report measured average particulate concentration at four sites before and after traffic restrictions.<br><br><table><tr><th>Site</th><th>Before</th><th>After</th></tr><tr><td>Central</td><td>31</td><td>24</td></tr><tr><td>East Gate</td><td>28</td><td>20</td></tr><tr><td>North Loop</td><td>34</td><td>27</td></tr><tr><td>South Pier</td><td>26</td><td>21</td></tr></table><br><small>Values are in μg/m³.</small>",
    question: "Which choice best supports the claim that the site with the highest initial concentration did not have the greatest reduction?",
    choices: [
      "North Loop started highest at 34 μg/m³.",
      "East Gate fell by 8 μg/m³, exceeding North Loop's 7-μg/m³ reduction even though North Loop started highest.",
      "South Pier ended above East Gate after restrictions.",
      "Central and North Loop each remained above 24 μg/m³ afterward."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>North Loop starts with the highest concentration at 34 μg/m³, but East Gate falls by 8 μg/m³, which is a larger reduction than North Loop's 7 μg/m³."
  },
  {
    id: 37,
    passage: "A startup tracked average response time for customer-support tickets across four teams before and after a new routing system.<br><br><table><tr><th>Team</th><th>Before</th><th>After</th></tr><tr><td>Amber</td><td>9.6 h</td><td>7.2 h</td></tr><tr><td>Bronze</td><td>10.4 h</td><td>8.5 h</td></tr><tr><td>Cobalt</td><td>8.9 h</td><td>6.1 h</td></tr><tr><td>Denim</td><td>9.1 h</td><td>6.9 h</td></tr></table>",
    question: "Which choice most effectively supports the claim that the fastest team after the change was also the team with the largest improvement?",
    choices: [
      "Cobalt finished fastest at 6.1 hours after the routing change.",
      "Cobalt improved by 2.8 hours, more than any other team, and also finished fastest at 6.1 hours.",
      "Bronze remained the slowest team after the change.",
      "Amber improved by 2.4 hours."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Cobalt has the lowest final response time (6.1 h) and the largest improvement (8.9 - 6.1 = 2.8 h). That directly supports the claim."
  },
  {
    id: 38,
    passage: "A researcher compared average interview scores before and after a training program for four applicant groups.<br><br><table><tr><th>Group</th><th>Before</th><th>After</th></tr><tr><td>E</td><td>71</td><td>79</td></tr><tr><td>F</td><td>68</td><td>80</td></tr><tr><td>G</td><td>74</td><td>81</td></tr><tr><td>H</td><td>66</td><td>78</td></tr></table>",
    question: "A student claims that the lowest-scoring group before training did not become the highest-scoring group afterward, even though it tied for the largest gain. Which choice best supports the claim?",
    choices: [
      "Group G ended highest after training at 81.",
      "Groups F and H each improved by 12 points.",
      "Group H started lowest at 66, tied for the largest gain at 12 points, and still finished below Group G's 81.",
      "Group E improved by 8 points after training."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>H is lowest initially (66), ties for the largest gain (12), but G ends highest at 81. That directly matches the claim."
  },
  {
    id: 39,
    passage: "An analyst compared the share of revenue from subscriptions and ads for four streaming platforms.<br><br><table><tr><th>Platform</th><th>Subscriptions</th><th>Ads</th></tr><tr><td>Nova</td><td>62%</td><td>21%</td></tr><tr><td>Orbit</td><td>55%</td><td>28%</td></tr><tr><td>Pulse</td><td>68%</td><td>17%</td></tr><tr><td>Quill</td><td>49%</td><td>33%</td></tr></table>",
    question: "Which choice best supports the conclusion that the platform most dependent on subscriptions was least dependent on ads?",
    choices: [
      "Pulse had 68% of revenue from subscriptions and only 17% from ads.",
      "Quill had the highest ad share at 33%.",
      "Nova also earned more than 60% of revenue from subscriptions.",
      "Orbit's ad share exceeded Pulse's by 11 points."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Pulse earns the highest share of revenue from subscriptions at 68% and the lowest share from ads at 17%. That directly supports the conclusion."
  },
  {
    id: 40,
    passage: "A health researcher tracked average resting heart rate before and after an endurance program.<br><br><table><tr><th>Participant Group</th><th>Before</th><th>After</th></tr><tr><td>I</td><td>74 bpm</td><td>68 bpm</td></tr><tr><td>J</td><td>78 bpm</td><td>71 bpm</td></tr><tr><td>K</td><td>72 bpm</td><td>65 bpm</td></tr><tr><td>L</td><td>76 bpm</td><td>70 bpm</td></tr></table>",
    question: "Which choice most effectively supports the claim that the group with the lowest final resting heart rate was tied for the largest reduction?",
    choices: [
      "Group K finished lowest at 65 bpm.",
      "Groups J and K each reduced resting heart rate by 7 bpm, and K also finished lowest at 65 bpm.",
      "Group I reduced heart rate by 6 bpm.",
      "Group L remained above Group K after the program."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Group K finishes with the lowest final resting heart rate at 65 bpm, and Groups J and K are tied for the largest reduction at 7 bpm each. That supports the claim directly."
  },
  {
    id: 41,
    passage: "A transit agency compared average daily bicycle-share trips on weekdays and weekends across four stations.<br><br><table><tr><th>Station</th><th>Weekday</th><th>Weekend</th></tr><tr><td>Union</td><td>112</td><td>95</td></tr><tr><td>Garden</td><td>84</td><td>109</td></tr><tr><td>Museum</td><td>76</td><td>104</td></tr><tr><td>Harbor</td><td>98</td><td>101</td></tr></table>",
    question: "A planner claims that the station with the fewest weekday trips did not have the most weekend trips, even though it showed the largest weekday-to-weekend increase. Which choice best supports the claim?",
    choices: [
      "Garden had the highest weekend total at 109 trips.",
      "Museum rose from 76 to 104 trips, the largest increase, while Garden had the highest weekend total at 109.",
      "Harbor increased by only 3 trips on weekends.",
      "Union had fewer weekend trips than weekday trips."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Museum is lowest on weekdays (76), gains the most (28), but Garden—not Museum—has the highest weekend total (109)."
  },
  {
    id: 42,
    passage: "A wildlife biologist recorded average migration distance for four tagged bird populations in dry and wet years.<br><br><table><tr><th>Population</th><th>Dry Year</th><th>Wet Year</th></tr><tr><td>North</td><td>820 km</td><td>760 km</td></tr><tr><td>South</td><td>690 km</td><td>720 km</td></tr><tr><td>East</td><td>910 km</td><td>845 km</td></tr><tr><td>West</td><td>740 km</td><td>755 km</td></tr></table>",
    question: "Which choice best supports the conclusion that only populations below 800 km in dry years increased their migration distance in wet years?",
    choices: [
      "North and East both migrated shorter distances in wet years than in dry years.",
      "South and West, the only populations below 800 km in dry years, both increased their migration distances in wet years.",
      "East still had the longest migration distance in wet years.",
      "South increased by 30 km from dry to wet years."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>South and West are the only populations below 800 km in dry years, and both migrate farther in wet years. North and East, which are above 800 km in dry years, both decrease instead."
  },
  {
    id: 43,
    passage: "A manufacturer tracked average assembly cost per unit for four products before and after a supplier switch.<br><br><table><tr><th>Product</th><th>Before</th><th>After</th></tr><tr><td>Aero</td><td>$18.40</td><td>$16.10</td></tr><tr><td>Beam</td><td>$21.00</td><td>$18.90</td></tr><tr><td>Core</td><td>$19.70</td><td>$16.80</td></tr><tr><td>Drift</td><td>$17.90</td><td>$16.50</td></tr></table>",
    question: "A report claims that the greatest cost reduction did not occur for the product with the highest starting cost. Which choice most effectively supports the report?",
    choices: [
      "Beam started highest at $21.00 per unit.",
      "Core reduced costs by $2.90 per unit, exceeding Beam's $2.10 reduction even though Beam started highest.",
      "Aero also reduced costs by more than $2.00 per unit.",
      "Drift ended below Beam after the supplier switch."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Beam starts highest at $21.00 per unit, but Core cuts costs by $2.90, which is more than Beam's $2.10 reduction. That directly supports the report."
  },
  {
    id: 44,
    passage: "A conservation group measured average tree survival in four restoration plots before and after installing drip irrigation.<br><br><table><tr><th>Plot</th><th>Before</th><th>After</th></tr><tr><td>1</td><td>61%</td><td>72%</td></tr><tr><td>2</td><td>58%</td><td>74%</td></tr><tr><td>3</td><td>65%</td><td>73%</td></tr><tr><td>4</td><td>54%</td><td>69%</td></tr></table>",
    question: "Which choice most effectively supports the claim that the plot with the lowest initial survival did not achieve the highest final survival, even though it improved by more than 10 points?",
    choices: [
      "Plot 4 started lowest at 54% survival.",
      "Plot 2 finished highest at 74% survival.",
      "Plot 4 rose to 69%, an increase of 15 points, while Plot 2 finished highest at 74%.",
      "Plot 1 and Plot 3 both ended above 72% survival."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>Plot 4 starts lowest at 54%, improves by 15 points to 69%, and still does not finish highest because Plot 2 ends at 74%. That directly supports the claim."
  },
  {
    id: 45,
    passage: "A business school compared acceptance rates and yield rates for four MBA programs.<br><br><table><tr><th>Program</th><th>Acceptance Rate</th><th>Yield Rate</th></tr><tr><td>Elm</td><td>24%</td><td>49%</td></tr><tr><td>Fir</td><td>19%</td><td>56%</td></tr><tr><td>Grove</td><td>28%</td><td>45%</td></tr><tr><td>Hollow</td><td>21%</td><td>52%</td></tr></table>",
    question: "A student claims that the most selective program also had the highest yield rate. Which choice best supports the claim?",
    choices: [
      "Fir had the lowest acceptance rate at 19% and the highest yield rate at 56%.",
      "Grove had the highest acceptance rate at 28%.",
      "Hollow's yield rate exceeded Elm's by 3 points.",
      "Elm admitted a larger share of applicants than Fir did."
    ],
    correct: 0,
    explanation: "<strong>Correct Answer: A</strong><br><br>Fir has the lowest acceptance rate at 19%, making it the most selective program, and it also has the highest yield rate at 56%."
  },
  {
    id: 46,
    passage: "A civic organization tracked average volunteer hours per member before and after introducing micro-volunteering options.<br><br><table><tr><th>Chapter</th><th>Before</th><th>After</th></tr><tr><td>North</td><td>6.2</td><td>7.8</td></tr><tr><td>South</td><td>5.4</td><td>7.5</td></tr><tr><td>East</td><td>6.9</td><td>8.0</td></tr><tr><td>West</td><td>4.8</td><td>7.3</td></tr></table>",
    question: "Which choice best supports the claim that the chapter with the lowest starting value showed the largest gain but still did not finish highest?",
    choices: [
      "East finished highest at 8.0 hours per member.",
      "West increased by 2.5 hours, the largest gain, while East finished highest at 8.0 hours.",
      "South also increased by more than 2 hours.",
      "North ended only 0.2 hour below East."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>West begins lowest at 4.8 hours, gains 2.5 hours, the largest increase, and still finishes below East's final value of 8.0 hours."
  },
  {
    id: 47,
    passage: "A district compared average class sizes in four schools in 2019 and 2025.<br><br><table><tr><th>School</th><th>2019</th><th>2025</th></tr><tr><td>Arbor</td><td>26</td><td>23</td></tr><tr><td>Brook</td><td>29</td><td>24</td></tr><tr><td>Creek</td><td>25</td><td>22</td></tr><tr><td>Dale</td><td>27</td><td>23</td></tr></table>",
    question: "Which choice most effectively supports the conclusion that the school with the largest reduction did not finish with the smallest average class size?",
    choices: [
      "Brook reduced average class size by 5 students, more than any other school.",
      "Creek finished with the smallest average class size at 22.",
      "Brook had the largest reduction, but Creek—not Brook—finished with the smallest class size.",
      "Arbor and Dale both ended with average class sizes of 23."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>Brook has the largest class-size reduction, falling by 5 students, but Creek finishes with the smallest class size at 22. That directly supports the conclusion."
  },
  {
    id: 48,
    passage: "An urban planner measured average tree-canopy cover in four neighborhoods before and after a planting campaign.<br><br><table><tr><th>Neighborhood</th><th>Before</th><th>After</th></tr><tr><td>Beacon</td><td>17%</td><td>23%</td></tr><tr><td>Crossing</td><td>14%</td><td>22%</td></tr><tr><td>Depot</td><td>20%</td><td>25%</td></tr><tr><td>Elm Park</td><td>16%</td><td>24%</td></tr></table>",
    question: "Which choice best supports the claim that the neighborhood with the lowest initial canopy tied for the largest increase but still did not end highest?",
    choices: [
      "Depot ended highest at 25% canopy cover.",
      "Crossing started lowest at 14%.",
      "Crossing and Elm Park each increased by 8 points, and Depot—not Crossing—ended highest at 25%.",
      "Beacon increased by 6 points between the two measurements."
    ],
    correct: 2,
    explanation: "<strong>Correct Answer: C</strong><br><br>Crossing starts with the lowest canopy cover at 14%, ties for the largest increase at 8 points, and still does not finish highest because Depot ends at 25%."
  },
  {
    id: 49,
    passage: "A software team compared average bug-fix times for four products before and after introducing automated triage.<br><br><table><tr><th>Product</th><th>Before</th><th>After</th></tr><tr><td>Ion</td><td>5.4 d</td><td>4.1 d</td></tr><tr><td>Jolt</td><td>6.2 d</td><td>4.8 d</td></tr><tr><td>Kite</td><td>5.8 d</td><td>4.2 d</td></tr><tr><td>Loop</td><td>4.9 d</td><td>3.9 d</td></tr></table>",
    question: "A report states that the product with the largest improvement did not finish with the shortest bug-fix time. Which choice most effectively supports the report?",
    choices: [
      "Loop finished with the shortest bug-fix time at 3.9 days.",
      "Kite improved by 1.6 days, more than any other product, while Loop finished shortest at 3.9 days.",
      "Jolt remained slower than Ion after automated triage.",
      "Ion improved by 1.3 days."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>Kite shows the biggest improvement (5.8 to 4.2 = 1.6 days), but Loop has the shortest final bug-fix time at 3.9 days. That supports the report directly."
  },
  {
    id: 50,
    passage: "A regional transit authority compared average weekend ridership on four rail branches in 2021 and 2025.<br><br><table><tr><th>Branch</th><th>2021</th><th>2025</th></tr><tr><td>North</td><td>18,200</td><td>21,600</td></tr><tr><td>South</td><td>16,900</td><td>21,300</td></tr><tr><td>East</td><td>19,500</td><td>22,100</td></tr><tr><td>West</td><td>15,800</td><td>20,900</td></tr></table>",
    question: "Which choice best supports the conclusion that the branch with the lowest 2021 ridership showed the largest increase but still did not reach the highest 2025 ridership?",
    choices: [
      "East had the highest 2025 ridership at 22,100 riders.",
      "West increased by 5,100 riders, the largest increase, while East ended highest at 22,100 riders.",
      "South also gained more than 4,000 riders over the period.",
      "North ended above South in 2025."
    ],
    correct: 1,
    explanation: "<strong>Correct Answer: B</strong><br><br>West begins with the lowest 2021 ridership at 15,800 and gains 5,100 riders, the largest increase. East ends highest in 2025 at 22,100 riders, so West does not finish highest."
  }
];
