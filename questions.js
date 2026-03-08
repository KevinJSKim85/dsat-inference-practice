const questions = [
  {
    id: 1,
    passage: "Researchers studying octopuses have long noted the animals' remarkable problem-solving abilities. In laboratory settings, octopuses have been observed unscrewing jar lids to obtain food, navigating complex mazes, and even using coconut shells as portable shelters\u2014a behavior that some scientists consider evidence of tool use. Unlike most invertebrates, octopuses have large, centralized brains with distinct lobes dedicated to learning and memory. However, approximately two-thirds of an octopus's neurons are located not in its brain but in its arms, which can taste, touch, and even make simple decisions independently of the central brain.",
    question: "Based on the text, what can most reasonably be inferred about octopus cognition?",
    choices: [
      "It relies on a distributed neural architecture that extends cognitive processing beyond the central brain.",
      "It is fundamentally similar to the cognition observed in vertebrate species with comparable brain sizes.",
      "It depends primarily on the octopus's central brain, with the arms serving only as sensory organs.",
      "It has been definitively proven to include the capacity for abstract thought and self-awareness."
    ],
    correct: 0,
    explanation: "The passage states that two-thirds of an octopus's neurons are in its arms and that the arms 'can taste, touch, and even make simple decisions independently of the central brain.' This directly supports the inference that octopus cognition is distributed across the body rather than centralized. Choice B is unsupported\u2014the passage contrasts octopuses with most invertebrates, not vertebrates. Choice C contradicts the passage's emphasis on arm-based neural processing. Choice D overstates what the passage claims; the text mentions problem-solving, not 'abstract thought' or 'self-awareness.'"
  },
  {
    id: 2,
    passage: "In the early twentieth century, manyesthetes considered folk art to be crude and unworthy of scholarly attention. However, artist and collector Holger Cahill organized a landmark 1932 exhibition at the Museum of Modern Art titled \"American Folk Art: The Art of the Common Man in America, 1750\u20131900.\" The exhibition presented quilts, weather vanes, and portraits by self-taught painters alongside canonical fine art. Rather than treating these objects as mere curiosities, Cahill argued that they represented a vital and ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "overlooked tradition that deserved recognition as a legitimate form of artistic expression.",
      "inferior tradition that could nonetheless provide historical context for understanding fine art.",
      "primitive tradition that had been rightfully excluded from major museum exhibitions.",
      "commercial tradition that primarily served practical rather than aesthetic purposes."
    ],
    correct: 0,
    explanation: "The passage establishes a contrast between the early twentieth-century view of folk art as 'crude and unworthy' and Cahill's effort to present it alongside 'canonical fine art.' The phrase 'rather than treating these objects as mere curiosities' signals that Cahill elevated folk art's status. The blank must logically continue this positive reappraisal. Choice A fits because 'vital and overlooked tradition' aligns with Cahill's corrective approach. Choices B, C, and D all maintain the dismissive attitude that the passage says Cahill was arguing against."
  },
  {
    id: 3,
    passage: "In her 1927 essay \"The New Biography,\" Virginia Woolf argued that the biographer faces an inherent tension: the need to present verifiable facts while also conveying the inner life of the subject. Woolf contended that a mere recitation of dates, accomplishments, and public events fails to capture what she called the \"invisible presences\"\u2014the emotions, relationships, and private struggles that shape a person. At the same time, she acknowledged that too much imaginative embellishment risks transforming biography into fiction, thereby undermining the reader's trust in the narrative's truthfulness.",
    question: "Based on the text, what can most reasonably be inferred about Woolf's view of effective biography?",
    choices: [
      "It should prioritize factual accuracy above all other considerations.",
      "It must balance documented evidence with insight into the subject's interior experience.",
      "It should rely primarily on the biographer's imagination to reconstruct the subject's emotions.",
      "It is an inherently flawed genre that can never fully represent its subject."
    ],
    correct: 1,
    explanation: "Woolf identifies an 'inherent tension' between verifiable facts and the subject's inner life, and she criticizes both extremes: 'mere recitation of dates' fails, but 'too much imaginative embellishment' turns biography into fiction. The logical inference is that effective biography must balance both elements. Choice A ignores Woolf's emphasis on 'invisible presences.' Choice C contradicts her warning about 'imaginative embellishment.' Choice D overstates her critique\u2014she describes a tension, not an impossibility."
  },
  {
    id: 4,
    passage: "A team of neuroscientists hypothesized that sleep plays an active role in memory consolidation, proposing that during deep sleep, the hippocampus replays neural patterns associated with recently learned information, effectively transferring these memories to the neocortex for long-term storage. The researchers noted that this replay process appears to be selective: not all memories from a given day are equally reinforced, suggesting that the sleeping brain may prioritize information deemed most relevant or emotionally significant.",
    question: "Which finding, if true, would most directly support the researchers' hypothesis?",
    choices: [
      "People who sleep immediately after studying for an exam recall more material than those who remain awake for several hours before sleeping.",
      "The total amount of sleep a person gets has no correlation with their ability to learn new motor skills.",
      "Brain imaging shows that the hippocampus is less active during deep sleep than during waking hours.",
      "Individuals who dream frequently report higher levels of creativity but not improved memory."
    ],
    correct: 0,
    explanation: "The hypothesis states that during deep sleep, the hippocampus replays and consolidates recently learned information. If people who sleep soon after studying remember more, this supports the idea that sleep shortly after learning facilitates consolidation. Choice B would weaken the link between sleep and memory. Choice C would undermine the claim of hippocampal activity during sleep. Choice D relates to creativity, not the specific memory consolidation process described."
  },
  {
    id: 5,
    passage: "Urban heat islands occur when cities replace natural land cover with dense concentrations of pavement, buildings, and other surfaces that absorb and retain heat. As a result, urban areas can be 1\u20137\u00b0F warmer than surrounding rural areas during the day and as much as 5\u00b0F warmer at night. While researchers have extensively documented this temperature differential, recent studies have revealed an additional dimension: the urban heat island effect is not uniformly distributed within cities. Neighborhoods with fewer trees and more impervious surfaces\u2014often lower-income communities\u2014experience significantly higher temperatures than wealthier areas with abundant green spaces.",
    question: "Based on the text, what can most reasonably be inferred about the urban heat island effect?",
    choices: [
      "It is primarily caused by vehicle emissions and industrial activity in urban centers.",
      "It creates environmental inequities that disproportionately affect economically disadvantaged communities.",
      "It can be entirely eliminated through the strategic planting of trees in urban neighborhoods.",
      "It has a greater impact on nighttime temperatures than on daytime temperatures."
    ],
    correct: 1,
    explanation: "The passage explicitly states that 'lower-income communities' experience 'significantly higher temperatures' due to fewer trees and more impervious surfaces, while 'wealthier areas with abundant green spaces' are cooler. This uneven distribution along economic lines directly supports the inference of environmental inequity. Choice A is wrong because the passage attributes the effect to surfaces that 'absorb and retain heat,' not emissions. Choice C overstates\u2014trees help, but 'entirely eliminated' goes beyond the text. Choice D misreads the data; the passage mentions both day and night differences without ranking them."
  },
  {
    id: 6,
    passage: "Linguist Noam Chomsky's theory of Universal Grammar posits that the human capacity for language is innate\u2014that children are born with a biological predisposition to acquire language, complete with an internal set of grammatical principles common to all languages. Some researchers, however, have challenged this view by pointing to significant structural differences across the world's languages. Linguist Daniel Everett, for instance, has argued that Pirah\u00e3, a language spoken by an Amazonian community, lacks features such as recursion that Chomsky considers universal. Everett contends that Pirah\u00e3's structure is shaped primarily by ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "an innate grammatical template that all human languages share regardless of cultural context.",
      "cultural values and communicative needs specific to the Pirah\u00e3 community rather than by innate biological constraints.",
      "a simplified grammatical system that proves Pirah\u00e3 speakers have limited cognitive abilities.",
      "historical contact with other Amazonian languages that gradually altered its original structure."
    ],
    correct: 1,
    explanation: "The passage sets up a contrast between Chomsky's view (language is innate/biological) and Everett's challenge. Everett argues that Pirah\u00e3 'lacks features such as recursion that Chomsky considers universal,' directly challenging the innateness claim. The logical completion of Everett's argument must offer an alternative explanation\u2014one rooted in culture rather than biology. Choice A would support Chomsky, contradicting Everett's position. Choice C introduces an unsupported and offensive claim. Choice D discusses historical contact, which isn't relevant to Everett's cultural argument as presented."
  },
  {
    id: 7,
    passage: "Coral reefs support roughly 25% of all marine species despite covering less than 1% of the ocean floor, a density of biodiversity that depends on a symbiotic relationship between coral polyps and microscopic algae called zooxanthellae. The algae live within coral tissue, providing up to 90% of the coral's energy through photosynthesis, while the coral provides the algae with shelter and access to sunlight. When ocean temperatures rise even 1\u20132\u00b0C above normal, corals expel their zooxanthellae in a stress response known as bleaching. Without the algae, the coral turns white and, if temperatures do not return to normal within weeks, typically dies.",
    question: "Based on the text, what can most reasonably be inferred about coral bleaching events?",
    choices: [
      "They pose a threat not only to corals themselves but to the vast ecosystems that depend on coral reefs.",
      "They are primarily caused by chemical pollutants rather than changes in water temperature.",
      "They are a temporary inconvenience that corals can easily recover from once conditions stabilize.",
      "They affect only the visual appearance of coral reefs without impacting their ecological function."
    ],
    correct: 0,
    explanation: "The passage establishes two key facts: (1) coral reefs support 25% of marine species, and (2) bleaching can kill corals. Combining these facts yields the inference that bleaching threatens not just corals but the entire ecosystem dependent on them. Choice B contradicts the passage, which attributes bleaching to temperature increases. Choice C is wrong because the passage says coral 'typically dies' if temperatures don't normalize quickly\u2014this isn't 'easily recovered from.' Choice D ignores that bleaching leads to death and the resulting ecological consequences."
  },
  {
    id: 8,
    passage: "Traditional economic theory assumes that individuals make rational decisions to maximize their utility. Behavioral economist Richard Thaler has challenged this assumption by demonstrating that people regularly make choices that deviate from purely rational self-interest. In one well-known experiment, participants were given $10 and asked to propose a split with a partner, who could accept or reject the offer. Rational theory predicts that the partner should accept any amount, since even $1 is better than nothing. However, offers perceived as unfair (typically below $3) were frequently ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "accepted, confirming that people behave as rational economic actors even in experimental settings.",
      "rejected, suggesting that considerations of fairness can override purely economic self-interest.",
      "ignored, indicating that participants did not understand the rules of the experiment.",
      "doubled, revealing that generous behavior is the default human response in economic transactions."
    ],
    correct: 1,
    explanation: "The passage challenges rational economic theory by showing that people deviate from self-interest. The 'however' signals a contrast with what rational theory predicts (accepting any amount). The passage states offers 'perceived as unfair' triggered a response opposite to rational prediction. Choice B logically completes this: people reject unfair offers even when acceptance would be economically beneficial, demonstrating fairness overriding self-interest. Choice A contradicts the entire premise. Choices C and D introduce ideas not supported by the passage."
  },
  {
    id: 9,
    passage: "When Claude Monet exhibited \"Impression, Sunrise\" in 1874, art critic Louis Leroy used the title derisively, calling the painters in the exhibition \"Impressionists\" as an insult. Leroy argued that the painting was merely an unfinished sketch, lacking the precise detail and polished surfaces expected of serious art. Yet the Impressionists embraced the label, seeing in it an accurate description of their artistic aims: capturing fleeting visual impressions rather than rendering permanent, idealized forms. Within two decades, the movement that Leroy had mocked would fundamentally reshape Western painting.",
    question: "What can most reasonably be inferred about the relationship between critical reception and artistic significance?",
    choices: [
      "Works that are initially praised by critics are more likely to achieve lasting artistic significance.",
      "Critical dismissal of innovative art does not necessarily predict its long-term cultural impact.",
      "Art critics play no meaningful role in determining which artistic movements gain public acceptance.",
      "The Impressionists succeeded primarily because they deliberately sought to provoke negative criticism."
    ],
    correct: 1,
    explanation: "The passage shows that Impressionism was initially dismissed by a critic ('merely an unfinished sketch') yet 'fundamentally reshape[d] Western painting' within two decades. This supports the inference that critical rejection doesn't determine long-term significance. Choice A is the opposite of what the passage suggests. Choice C goes too far\u2014the passage shows one critic was wrong, not that critics are irrelevant. Choice D is unsupported; the Impressionists 'embraced the label' but the passage doesn't say they sought negative criticism."
  },
  {
    id: 10,
    passage: "A 2021 study on neuroplasticity found that London taxi drivers, who must memorize the city's complex layout of 25,000 streets (known as \"The Knowledge\"), have significantly larger posterior hippocampi than control subjects. Remarkably, the size of this brain region correlated positively with the number of years spent driving a taxi, suggesting that the hippocampus physically expanded in response to navigational demands. The researchers also observed that retired taxi drivers showed some reduction in hippocampal volume compared to active drivers.",
    question: "Which finding, if true, would most directly weaken the researchers' conclusion that navigational demands caused the hippocampal changes?",
    choices: [
      "Individuals who frequently use GPS navigation show no increase in hippocampal volume over time.",
      "People with naturally larger hippocampi are disproportionately likely to pursue careers requiring spatial navigation.",
      "Taxi drivers in other major cities also demonstrate increased hippocampal volume compared to non-drivers.",
      "The posterior hippocampus is known to be involved in spatial memory and navigation."
    ],
    correct: 1,
    explanation: "The researchers concluded that driving a taxi caused the hippocampus to grow (navigational demands \u2192 brain change). Choice B offers an alternative explanation: perhaps people with naturally larger hippocampi are drawn to navigation-heavy careers (reverse causation). This would weaken the causal claim. Choice A actually supports the conclusion by showing GPS users (who don't rely on memorized navigation) don't show changes. Choice C supports generalizability of the finding. Choice D supports the theoretical basis for the claim."
  },
  {
    id: 11,
    passage: "The ancient Roman aqueduct system, spanning over 400 kilometers across the empire, transported water using only the force of gravity. Engineers achieved a remarkably precise gradient\u2014a drop of roughly 34 centimeters per kilometer\u2014maintained consistently over vast distances and across varied terrain. Where valleys intervened, the Romans constructed towering arcades; where hills blocked the path, they carved tunnels through solid rock. The Pont du Gard in southern France, a three-tiered aqueduct bridge standing nearly 50 meters high, exemplifies this engineering, having remained structurally sound for nearly two millennia.",
    question: "Based on the text, what can most reasonably be inferred about Roman engineering capabilities?",
    choices: [
      "Roman engineers possessed sophisticated surveying skills that enabled precision construction over great distances.",
      "Roman aqueducts relied on mechanical pumps to move water through sections where gravity was insufficient.",
      "The aqueduct system was primarily designed to serve military outposts rather than civilian populations.",
      "Roman engineering techniques were borrowed entirely from earlier Greek and Egyptian construction methods."
    ],
    correct: 0,
    explanation: "The passage emphasizes the 'remarkably precise gradient' maintained 'consistently over vast distances and across varied terrain,' including building arcades over valleys and tunnels through hills. Achieving such precision across hundreds of kilometers necessarily implies advanced surveying abilities. Choice B directly contradicts the text's statement that the system used 'only the force of gravity.' Choices C and D introduce claims entirely absent from the passage."
  },
  {
    id: 12,
    passage: "Werner Heisenberg's uncertainty principle, formulated in 1927, establishes that certain pairs of physical properties\u2014such as a particle's position and momentum\u2014cannot both be measured with arbitrary precision simultaneously. This is not merely a limitation of measuring instruments; rather, it reflects a fundamental property of quantum systems. When a physicist measures a particle's position with greater precision, the particle's momentum becomes inherently less determinate, and vice versa. Some popular accounts have mischaracterized this principle as implying that observation \"disturbs\" the system, but Heisenberg's insight was more radical: prior to measurement, the particle simply does not ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "exist in the physical sense, calling into question the reality of subatomic matter.",
      "possess simultaneously precise values for both properties, challenging classical notions of determinism.",
      "move in predictable trajectories, confirming Newton's laws of motion at the quantum scale.",
      "interact with other particles, rendering quantum systems permanently isolated from observation."
    ],
    correct: 1,
    explanation: "The passage explains that the uncertainty principle is not about measurement disturbing the system but about a 'fundamental property'\u2014properties are 'inherently less determinate.' The blank must express Heisenberg's 'more radical' insight: that the particle doesn't have definite values before measurement. Choice B captures this precisely. Choice A goes too far (the particle exists, it just lacks definite property values). Choice C contradicts quantum mechanics by invoking Newton's laws. Choice D introduces isolation, which isn't discussed."
  },
  {
    id: 13,
    passage: "For thousands of years, Indigenous peoples in Australia practiced \"fire-stick farming\"\u2014the deliberate, controlled burning of underbrush to manage landscapes. These low-intensity fires cleared dead vegetation, promoted the growth of fire-adapted plant species that attracted game animals, and created natural firebreaks that prevented the uncontrolled spread of larger wildfires. When European colonizers suppressed Indigenous burning practices in the nineteenth century, fuel loads accumulated unchecked across the Australian landscape. Many ecologists now argue that the catastrophic bushfires Australia has experienced in recent decades are, at least in part, a consequence of ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "climate change alone, since historical land management practices have no bearing on modern fire behavior.",
      "the abandonment of Indigenous fire management practices, which had historically regulated fuel accumulation.",
      "increased urbanization, which forced Indigenous communities to relocate away from fire-prone regions.",
      "the introduction of non-native plant species by European settlers, which made Australian landscapes more flammable."
    ],
    correct: 1,
    explanation: "The passage builds a causal chain: (1) Indigenous burning cleared underbrush and prevented large fires, (2) European suppression of these practices led to fuel accumulation, (3) ecologists link modern catastrophic fires to this change. The logical completion attributes recent fires to the abandonment of Indigenous practices. Choice A contradicts the passage's emphasis on land management. Choice C discusses urbanization, not fire management. Choice D introduces non-native plants, which aren't mentioned in the passage."
  },
  {
    id: 14,
    passage: "Ornithologists studying Arctic tern migration have discovered that these birds make an annual round-trip journey of approximately 71,000 kilometers, flying from Arctic breeding grounds to Antarctic feeding areas and back. Researchers fitted terns with lightweight geolocators and found that the birds do not follow a direct north-south route. Instead, they trace an enormous S-shaped path across the Atlantic, exploiting prevailing wind patterns to reduce energy expenditure. The study also revealed that terns spend approximately four months at their Antarctic destination, timing their arrival to coincide with the period of maximum daylight and food abundance.",
    question: "Which finding, if true, would most directly support the hypothesis that Arctic terns' migratory route is shaped primarily by energy efficiency rather than shortest distance?",
    choices: [
      "Arctic terns that deviate from the S-shaped path and fly more directly arrive at their destination in fewer days but in significantly poorer physical condition.",
      "Other long-distance migratory birds follow direct north-south routes regardless of prevailing wind patterns.",
      "Arctic terns have a higher metabolic rate during flight than most other migratory seabirds.",
      "The S-shaped path takes Arctic terns over several coastal regions where food sources are available during transit."
    ],
    correct: 0,
    explanation: "If terns that take the direct (shorter) route arrive in poorer condition, this demonstrates that the longer S-shaped route\u2014while adding distance\u2014conserves energy by exploiting wind patterns, directly supporting the energy-efficiency hypothesis. Choice B describes other birds but doesn't explain why terns choose their specific path. Choice C is about metabolic rate, not route choice. Choice D suggests food availability as an alternative explanation, which would actually weaken the wind-pattern hypothesis."
  },
  {
    id: 15,
    passage: "During the Italian Renaissance, a philosophical movement known as humanism shifted intellectual focus from purely theological concerns to the study of classical Greek and Roman texts. Humanist scholars such as Petrarch and Erasmus championed the idea that education should cultivate well-rounded individuals capable of civic engagement, moral reasoning, and artistic appreciation\u2014not merely prepare them for religious life. This educational philosophy, known as studia humanitatis, encompassed grammar, rhetoric, poetry, history, and moral philosophy. The movement did not reject religion but rather ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "sought to replace it with a purely secular framework based on ancient Greek materialism.",
      "argued that religious understanding could be deepened and enriched through engagement with classical learning.",
      "maintained that religious texts were superior to all classical sources in matters of education.",
      "insisted that theological study be removed from university curricula across Europe."
    ],
    correct: 1,
    explanation: "The passage states that humanism 'did not reject religion but rather...' indicating the completion must describe a way humanism accommodated religion. The passage shows humanists expanded education beyond religious preparation while valuing classical texts. Choice B logically follows: humanism enriched religious understanding through classical learning, maintaining religion while broadening its intellectual foundation. Choices A and D describe outright rejection of religion, contradicting 'did not reject.' Choice C contradicts the humanist elevation of classical texts."
  },
  {
    id: 16,
    passage: "In 2005, marine biologists discovered thriving ecosystems around hydrothermal vents on the deep ocean floor, where superheated water rich in hydrogen sulfide erupts from Earth's crust. Unlike surface ecosystems, which depend on photosynthesis, these communities are sustained through chemosynthesis: specialized bacteria convert hydrogen sulfide into energy, forming the base of a food chain that supports tube worms, shrimp, crabs, and fish\u2014all in complete darkness, under crushing pressure, at temperatures that would be lethal to most known organisms.",
    question: "Based on the text, what can most reasonably be inferred about the requirements for complex life?",
    choices: [
      "Sunlight is not a universal prerequisite for sustaining complex, multi-species ecosystems.",
      "Chemosynthetic ecosystems are more productive and biodiverse than photosynthetic ones.",
      "Complex life can only develop in environments with extreme temperatures and high pressure.",
      "Hydrothermal vent communities are entirely independent of all surface-level ecological processes."
    ],
    correct: 0,
    explanation: "The passage shows complex ecosystems (tube worms, shrimp, crabs, fish) thriving 'in complete darkness' through chemosynthesis rather than photosynthesis. This directly supports the inference that sunlight isn't required for complex life. Choice B makes a comparative claim about productivity not supported by the passage. Choice C illogically reverses the finding\u2014extreme conditions can support life, not that they're required. Choice D overstates; the passage doesn't address whether these communities have any connection to surface processes."
  },
  {
    id: 17,
    passage: "Ethnomusicologist Nettl observed that while musical systems vary enormously across cultures\u2014in scales, rhythms, instruments, and social functions\u2014certain patterns appear with striking regularity. The octave, for instance, is recognized as a meaningful interval in virtually every documented musical tradition. Lullabies worldwide tend to share a narrow pitch range and descending melodic contour. And call-and-response structures appear independently in West African, Indigenous Australian, and European folk traditions. Some researchers interpret these commonalities as evidence of universal cognitive or perceptual predispositions, while others attribute them to the constraints imposed by the human vocal apparatus.",
    question: "Based on the text, what can most reasonably be inferred about cross-cultural musical similarities?",
    choices: [
      "They definitively prove that all musical traditions share a single common historical origin.",
      "They may reflect biological or cognitive factors common to all humans rather than cultural diffusion alone.",
      "They are coincidental and hold no significance for understanding human cognition or perception.",
      "They demonstrate that Western musical theory provides the best framework for analyzing all world music."
    ],
    correct: 1,
    explanation: "The passage presents two explanations for cross-cultural musical patterns: 'universal cognitive or perceptual predispositions' and 'constraints imposed by the human vocal apparatus'\u2014both are biological/cognitive factors. The patterns 'appear independently' across unrelated cultures, suggesting something other than cultural transmission. Choice B captures this inference. Choice A claims 'definitively prove' a common origin, which is too strong and not what the passage suggests. Choice C contradicts the researchers' interpretations. Choice D introduces Western-centric bias absent from the passage."
  },
  {
    id: 18,
    passage: "While natural photosynthesis converts only about 1% of absorbed solar energy into chemical energy, scientists developing artificial photosynthesis systems have achieved conversion rates exceeding 10%. These systems use synthetic catalysts to split water molecules, producing hydrogen fuel and oxygen. However, the catalysts currently used\u2014often based on rare metals like platinum and iridium\u2014are prohibitively expensive for large-scale deployment. Researchers at several institutions are now testing earth-abundant alternatives such as iron and cobalt, which would ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "further increase the energy conversion efficiency of artificial photosynthesis beyond current levels.",
      "eliminate the need for water as a raw material in the artificial photosynthesis process.",
      "make the technology economically viable for widespread commercial and industrial use.",
      "enable artificial photosynthesis to replicate the exact biochemical pathways of natural plants."
    ],
    correct: 2,
    explanation: "The passage identifies cost as the barrier: current catalysts are 'prohibitively expensive for large-scale deployment.' Researchers are testing 'earth-abundant alternatives' (iron, cobalt), which are cheaper. The logical completion addresses the cost problem: cheaper catalysts would make the technology economically viable at scale. Choice A discusses efficiency, which isn't the problem being addressed. Choice B misrepresents the chemistry. Choice D conflates artificial and natural photosynthesis in a way the passage doesn't suggest."
  },
  {
    id: 19,
    passage: "The collapse of Classic Maya civilization around 900 CE was once attributed to a single catastrophic event, such as foreign invasion or epidemic disease. However, recent archaeological and paleoclimatic evidence suggests a more complex explanation. Sediment cores from lake beds in the Yucatan Peninsula reveal a series of severe droughts occurring between 800 and 1000 CE. Meanwhile, archaeological evidence indicates that the collapse was not simultaneous across the Maya region: cities in the southern lowlands were abandoned first, while northern cities like Chichen Itza continued to flourish for another century or more.",
    question: "Which finding, if true, would most directly support the argument that drought contributed to the Classic Maya collapse?",
    choices: [
      "Southern lowland cities relied more heavily on rain-fed agriculture than northern cities, which had access to natural wells called cenotes.",
      "The Maya had sophisticated mathematical and astronomical knowledge that rivaled contemporary European civilizations.",
      "Northern Maya cities eventually declined as well, though for reasons apparently unrelated to climate.",
      "Archaeological evidence shows that Maya cities maintained extensive trade networks throughout the Classic period."
    ],
    correct: 0,
    explanation: "The passage states southern cities fell first while northern ones endured. If southern cities depended on rain (vulnerable to drought) while northern cities had cenotes (groundwater, drought-resistant), this explains the geographic pattern of collapse and directly supports drought as a contributing factor. Choice B is about Maya knowledge, not drought. Choice C actually weakens the drought argument for northern cities. Choice D discusses trade, not climate vulnerability."
  },
  {
    id: 20,
    passage: "The development of large language models (LLMs) has reignited debates about the nature of creativity. These AI systems can produce poetry, compose music, and generate visual art that human evaluators sometimes cannot distinguish from human-created works. Proponents argue that if the output is indistinguishable from human creativity, the distinction is meaningless. Critics counter that LLMs merely recombine patterns from training data through statistical prediction, lacking the intentionality, emotional experience, and cultural context that they consider essential to genuine creative expression. Neither side disputes the sophistication of LLM outputs; the disagreement centers on whether ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "LLMs should be granted legal copyright protections for the works they generate.",
      "the process by which a work is created matters for determining whether it constitutes true creativity.",
      "LLM-generated art is more technically accomplished than art created by human artists.",
      "statistical pattern recognition is a more efficient method of producing art than human intuition."
    ],
    correct: 1,
    explanation: "The passage presents two positions that agree on output quality but disagree on whether the underlying process matters. Proponents focus on the output (indistinguishable = same thing). Critics focus on the process (lacking intentionality, emotion, context). The disagreement therefore centers on whether process matters for defining creativity. Choice A introduces legal issues not discussed. Choice C claims superiority not established in the passage. Choice D discusses efficiency, which isn't the debate."
  },
  {
    id: 21,
    passage: "Text 1:\nSociologist Robert Putnam has argued that social capital\u2014the networks of relationships among people who live and work in a particular society\u2014has declined sharply in the United States since the 1960s. In his influential book \"Bowling Alone,\" Putnam documented decreases in civic participation, club membership, and informal socializing, attributing these trends to television, suburban sprawl, and generational changes.\n\nText 2:\nSociologist Claude Fischer has challenged Putnam's narrative by arguing that Americans have not become more isolated but have instead shifted the nature of their social connections. Fischer's research suggests that while formal civic organizations have indeed seen declining membership, informal social networks\u2014maintained through phone calls, digital communication, and selective personal relationships\u2014have remained robust or even expanded.",
    question: "Based on the texts, how would Fischer most likely respond to Putnam's claim that social capital has declined in the United States?",
    choices: [
      "By arguing that Putnam's data on civic participation is inaccurate and based on flawed methodology.",
      "By contending that Putnam's framework fails to account for evolving forms of social connection that maintain community bonds.",
      "By agreeing that social isolation has increased but attributing it to different causes than those Putnam identifies.",
      "By asserting that formal civic organizations are more important indicators of social health than informal relationships."
    ],
    correct: 1,
    explanation: "Fischer 'challenged Putnam's narrative' not by denying his data on formal organizations but by arguing that 'Americans have not become more isolated'\u2014they've 'shifted the nature of their social connections' to informal networks that 'remained robust or even expanded.' This means Fischer would likely say Putnam's framework is too narrow, failing to capture new forms of connection. Choice A attacks methodology, but Fischer appears to accept Putnam's data on formal organizations. Choice C agrees with Putnam's conclusion, but Fischer explicitly disagrees that people are more isolated. Choice D contradicts Fischer's emphasis on informal networks."
  },
  {
    id: 22,
    passage: "The axolotl, a salamander native to lakes near Mexico City, possesses an extraordinary ability that has captivated biologists: it can regenerate entire limbs, portions of its heart, sections of its spinal cord, and even parts of its brain with full restoration of function. Unlike mammals, which typically form scar tissue at wound sites, the axolotl initiates a process in which mature cells at the wound site dedifferentiate\u2014reverting to a stem-cell-like state\u2014before proliferating and redifferentiating into the specific cell types needed to rebuild the lost structure.",
    question: "Based on the text, what can most reasonably be inferred about a key difference between axolotl and mammalian wound healing?",
    choices: [
      "Mammalian cells lack the genetic information necessary to produce the cell types found in limbs and organs.",
      "The axolotl healing process involves cells returning to a less specialized state, a capability that mammalian wound responses do not typically activate.",
      "Axolotl regeneration occurs instantaneously, whereas mammalian scar formation is a gradual process.",
      "Mammals evolved scar tissue formation because it provides superior long-term structural support compared to regeneration."
    ],
    correct: 1,
    explanation: "The passage directly contrasts the two: mammals 'form scar tissue' while axolotls undergo 'dedifferentiation'\u2014cells revert to 'a stem-cell-like state' and then redifferentiate. The key distinction is that axolotl cells can return to a less specialized state, which mammals' wound responses don't do. Choice A is inaccurate (mammalian cells contain the same genome). Choice C claims instantaneous regeneration, which isn't stated. Choice D introduces an evolutionary advantage claim not made in the passage."
  },
  {
    id: 23,
    passage: "Economist Elinor Ostrom, the first woman to win the Nobel Prize in Economics, challenged the widely held assumption that common-pool resources\u2014such as fisheries, forests, and irrigation systems\u2014inevitably suffer from overexploitation without either private ownership or government regulation. Through decades of field research across diverse communities worldwide, Ostrom documented hundreds of cases in which local groups successfully managed shared resources through self-organized institutions. These institutions typically featured clearly defined boundaries, locally adapted rules, collective decision-making processes, and graduated sanctions for rule violations.",
    question: "Based on the text, what can most reasonably be inferred about Ostrom's contribution to economic theory?",
    choices: [
      "She proved that private ownership is always more efficient than communal management of shared resources.",
      "She demonstrated that the conventional binary framework of private versus government control overlooked a viable third approach to resource management.",
      "She argued that government regulation is the most effective method for preventing the overexploitation of natural resources.",
      "She showed that resource management is successful only in small, homogeneous communities with shared cultural values."
    ],
    correct: 1,
    explanation: "The passage states Ostrom 'challenged the widely held assumption' that common resources need 'either private ownership or government regulation.' She showed local groups can self-manage through 'self-organized institutions'\u2014a third option beyond the conventional private vs. government binary. Choice A contradicts her work (she showed communal management works). Choice C promotes government regulation, which she challenged. Choice D imposes limitations ('only in small, homogeneous communities') not stated in the passage."
  },
  {
    id: 24,
    passage: "In a 2019 study, researchers presented participants with two versions of the same resume: one bearing a traditionally European American name and the other a traditionally African American name. Despite identical qualifications, experience, and formatting, resumes with European American names received 36% more callbacks for interviews. When the researchers added prestigious honors and awards to both versions of the resume, the callback gap narrowed but did not disappear, suggesting that while strong credentials can partially mitigate the effect of name-based discrimination, they cannot ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "eliminate it entirely, as bias persists even when candidates demonstrate exceptional qualifications.",
      "be accurately assessed by employers who lack expertise in the candidates' professional fields.",
      "compensate for the overall decline in available positions within competitive job markets.",
      "replace the importance of personal connections and networking in the hiring process."
    ],
    correct: 0,
    explanation: "The passage shows: (1) identical resumes with different names had a 36% callback gap; (2) adding prestigious honors 'narrowed but did not disappear' the gap. The sentence structure 'they cannot ________' must complete the idea that credentials cannot fully overcome name-based discrimination. Choice A precisely captures this\u2014bias persists even with exceptional qualifications. Choices B, C, and D all introduce topics (employer expertise, job market decline, networking) that aren't discussed in the passage."
  },
  {
    id: 25,
    passage: "The Voyager 1 spacecraft, launched in 1977, continues to transmit data from interstellar space more than 15 billion miles from Earth. Its signals, traveling at the speed of light, take over 22 hours to reach ground stations on Earth. The spacecraft carries a golden record containing sounds and images selected to portray the diversity of life and culture on Earth\u2014a message intended for any extraterrestrial intelligence that might encounter it. Scientists estimate that Voyager 1's plutonium power source will cease generating sufficient electricity to operate any of its instruments by approximately 2025, after which the spacecraft will continue drifting silently through the Milky Way for millions of years.",
    question: "Based on the text, what can most reasonably be inferred about the golden record aboard Voyager 1?",
    choices: [
      "It was designed primarily as a scientific instrument for collecting data about interstellar space.",
      "Its intended audience may never receive it, making it as much a symbolic gesture as a practical communication.",
      "It will be rendered unplayable by cosmic radiation within the next few decades.",
      "It was included as an afterthought and was not part of the mission's original scientific objectives."
    ],
    correct: 1,
    explanation: "The passage states the golden record is 'a message intended for any extraterrestrial intelligence that might encounter it,' while noting the spacecraft will 'drift silently through the Milky Way for millions of years.' The vast emptiness of space and the minuscule probability of encounter make it reasonable to infer the record is largely symbolic. Choice A is wrong\u2014the record is a message, not an instrument. Choice C makes a claim about radiation damage not in the passage. Choice D calls it an 'afterthought,' which contradicts the deliberate selection of 'sounds and images.'"
  }
];
