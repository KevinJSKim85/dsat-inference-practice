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
  },
  {
    id: 26,
    passage: "Microbiologist Lynn Margulis spent decades defending her endosymbiotic theory, which proposes that mitochondria and chloroplasts\u2014organelles essential to eukaryotic cells\u2014were once free-living bacteria that were engulfed by ancestral cells. When Margulis first submitted her paper in 1966, it was rejected by over a dozen journals; the scientific establishment considered the idea too radical. Yet mounting evidence\u2014including the discovery that mitochondria and chloroplasts possess their own DNA, replicate independently, and are bounded by double membranes\u2014gradually transformed her hypothesis from fringe speculation into mainstream biology.",
    question: "Based on the text, what can most reasonably be inferred about the process of scientific acceptance?",
    choices: [
      "Theories that are initially rejected by the scientific community are always eventually vindicated by new evidence.",
      "Widespread initial resistance to a theory does not preclude its eventual acceptance when supported by accumulating evidence.",
      "Scientific journals are inherently biased against theories proposed by female researchers.",
      "The endosymbiotic theory was accepted primarily because Margulis was a persistent advocate rather than because of new evidence."
    ],
    correct: 1,
    explanation: "The passage shows a clear trajectory: Margulis's theory was 'rejected by over a dozen journals' and considered 'too radical,' but 'mounting evidence' eventually made it 'mainstream biology.' This supports the inference that initial rejection doesn't prevent later acceptance if evidence accumulates. Choice A overgeneralizes with 'always.' Choice C introduces gender bias not discussed in the passage. Choice D contradicts the text, which attributes acceptance to 'mounting evidence,' not just persistence."
  },
  {
    id: 27,
    passage: "In 2016, a team of economists analyzed the long-term outcomes of participants in a universal basic income (UBI) experiment conducted in Manitoba, Canada, between 1974 and 1979. Known as \"Mincome,\" the program guaranteed a minimum income to residents of Dauphin, a small prairie town. The researchers found that during the experiment, hospitalization rates dropped 8.5%, high school completion rates increased, and new mothers chose to extend maternity leave. Contrary to widespread predictions at the time, labor force participation among primary earners did not decline significantly; the only groups that reduced their working hours were adolescents (who stayed in school longer) and new mothers.",
    question: "Based on the text, what can most reasonably be inferred about concerns that universal basic income discourages work?",
    choices: [
      "The Mincome experiment definitively proved that UBI has no effect on labor force participation under any circumstances.",
      "The Mincome data suggest that the most common concern about UBI\u2014that it would reduce work incentive among primary earners\u2014was not supported in this case.",
      "Universal basic income programs are economically feasible for all countries regardless of their existing social welfare systems.",
      "The reductions in working hours among adolescents and new mothers demonstrate that UBI does indeed discourage productive economic activity."
    ],
    correct: 1,
    explanation: "The passage directly states that 'labor force participation among primary earners did not decline significantly,' which was 'contrary to widespread predictions.' This supports the inference that the common concern about work disincentives was not borne out in this case. Choice A overstates with 'definitively proved' and 'under any circumstances.' Choice C discusses feasibility, which the passage doesn't address. Choice D mischaracterizes the data\u2014adolescents staying in school and mothers extending maternity leave aren't typically considered unproductive."
  },
  {
    id: 28,
    passage: "The Antikythera mechanism, recovered from a shipwreck off the Greek island of Antikythera in 1901, is a corroded bronze artifact roughly the size of a shoebox. For decades, its purpose remained mysterious. X-ray imaging in the 1970s revealed an intricate system of at least 30 interlocking gears capable of predicting solar and lunar eclipses, tracking the positions of the five planets known to the ancient Greeks, and calculating the dates of the Olympic Games. No artifact of comparable mechanical complexity would appear in the historical record for another 1,400 years\u2014not until medieval European astronomical clocks.",
    question: "Based on the text, what can most reasonably be inferred about ancient Greek technological capabilities?",
    choices: [
      "The ancient Greeks possessed engineering skills that significantly exceeded what the subsequent historical record would suggest for over a millennium.",
      "Ancient Greek technology was uniformly more advanced than all subsequent civilizations until the European Renaissance.",
      "The Antikythera mechanism was likely built by a civilization other than the ancient Greeks.",
      "The mechanism's complexity proves that ancient Greeks had access to modern manufacturing techniques."
    ],
    correct: 0,
    explanation: "The passage states that no artifact of 'comparable mechanical complexity' appeared for '1,400 years,' implying a technological capability that far surpassed what historians might have assumed from the intervening record. Choice B makes a sweeping claim about 'all subsequent civilizations' that the passage doesn't support. Choice C contradicts the passage's framing of the mechanism as Greek. Choice D anachronistically attributes 'modern manufacturing techniques' to the ancient Greeks."
  },
  {
    id: 29,
    passage: "Philosopher Peter Singer has argued that the geographic distance between a person in need and a potential helper is morally irrelevant. Singer illustrates this with a thought experiment: if you walked past a shallow pond where a child was drowning, virtually everyone would agree you should wade in to save the child, even if it meant ruining your expensive shoes. Singer then argues that people in wealthy nations face an analogous situation with respect to global poverty\u2014they could save lives by donating relatively small amounts of money, yet most choose not to. Critics respond that the analogy breaks down because ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "drowning children are always located near shallow ponds, whereas poverty is distributed across multiple continents.",
      "the causal chain between donating money and saving a life is far more complex and uncertain than the direct act of pulling a child from a pond.",
      "Singer's philosophical training prevents him from understanding the practical economics of charitable giving.",
      "geographic distance actually increases the moral obligation to help because it demonstrates greater compassion."
    ],
    correct: 1,
    explanation: "The passage sets up Singer's argument (distance is irrelevant; both cases involve easily preventable death) and then introduces critics who say 'the analogy breaks down.' The completion must explain why the pond scenario differs from global poverty. Choice B identifies the key disanalogy: saving a drowning child is direct and certain, while donating money involves complex intermediary steps with uncertain outcomes. Choice A makes a trivially obvious geographic point that doesn't address the moral argument. Choice C is an ad hominem attack. Choice D contradicts the critics' position."
  },
  {
    id: 30,
    passage: "Mycorrhizal networks\u2014underground fungal systems that connect the roots of different trees\u2014have been shown to facilitate the transfer of nutrients between plants. Ecologist Suzanne Simard demonstrated that Douglas fir trees shaded by a forest canopy received carbon from neighboring paper birch trees through these fungal connections, and that the transfer increased when the fir trees were most stressed. Some researchers have characterized these networks as evidence of cooperative behavior among trees, popularly dubbed the \"Wood Wide Web.\" Other scientists caution that framing fungal networks in terms of cooperation may be misleading, noting that the fungi themselves extract a significant portion of the transferred carbon as payment for their services.",
    question: "Based on the text, what can most reasonably be inferred about the characterization of mycorrhizal networks as cooperative?",
    choices: [
      "It is universally accepted among ecologists as an accurate description of forest dynamics.",
      "It may oversimplify the relationship by neglecting the fungi's own role as intermediaries that benefit from the exchange.",
      "It has been definitively disproven by research showing that fungi steal all transferred nutrients.",
      "It applies only to the specific relationship between Douglas fir and paper birch trees."
    ],
    correct: 1,
    explanation: "The passage presents two perspectives: some call the networks 'cooperative,' while others say this 'may be misleading' because fungi 'extract a significant portion of the transferred carbon as payment.' This suggests the cooperation framing oversimplifies a three-party relationship where the fungal intermediary also benefits. Choice A contradicts the stated disagreement. Choice C overstates\u2014the fungi take 'a significant portion,' not all nutrients, and nothing is 'definitively disproven.' Choice D restricts the discussion to two species when the passage discusses the phenomenon more broadly."
  },
  {
    id: 31,
    passage: "During the Harlem Renaissance of the 1920s and 1930s, author Zora Neale Hurston drew criticism from some Black intellectuals, including Richard Wright, for her use of Southern Black dialect in her novels. Wright argued that Hurston's writing perpetuated stereotypes and failed to engage with the political realities of racial oppression. Hurston countered that authentic representation of Black folk culture\u2014including its language, humor, and oral traditions\u2014was itself a political act, one that affirmed the richness and validity of a cultural heritage that mainstream society sought to diminish.",
    question: "Based on the text, what can most reasonably be inferred about the disagreement between Hurston and Wright?",
    choices: [
      "It centered on fundamentally different views about what constitutes meaningful political expression through literature.",
      "It was primarily a personal rivalry unrelated to broader debates about African American literature.",
      "It was resolved when both authors agreed that dialect writing could serve political purposes.",
      "It demonstrated that Hurston lacked awareness of the political dimensions of her literary choices."
    ],
    correct: 0,
    explanation: "Wright viewed political engagement as requiring direct confrontation with oppression, while Hurston saw cultural affirmation as 'itself a political act.' The disagreement thus hinges on different definitions of political expression in literature. Choice B reduces an intellectual debate to personal rivalry without textual support. Choice C claims a resolution not mentioned in the passage. Choice D contradicts Hurston's explicit argument that her approach was political."
  },
  {
    id: 32,
    passage: "A 2023 study examined whether exposure to nature improves cognitive function in children. Researchers compared two groups of elementary school students: one group attended classes in a traditional indoor classroom, while the other attended identical lessons conducted in an outdoor garden setting. After eight weeks, students in the outdoor group scored significantly higher on tests of sustained attention and working memory. However, the researchers noted that the outdoor group also reported higher levels of enjoyment and engagement with the lessons, raising the question of whether the cognitive benefits were attributable to nature exposure itself or to the increased motivation that accompanied it.",
    question: "Which finding, if true, would most help determine whether nature exposure or increased motivation was responsible for the cognitive benefits?",
    choices: [
      "A third group that attended engaging, game-based lessons indoors showed cognitive improvements comparable to those of the outdoor group.",
      "Students in the outdoor group performed better on all school subjects, not just the ones taught outside.",
      "The outdoor group also showed improvements in physical fitness compared to the indoor group.",
      "Teachers reported that the outdoor lessons required more preparation time than traditional indoor lessons."
    ],
    correct: 0,
    explanation: "The key confound is that nature exposure and increased motivation co-occurred. Choice A would isolate the variable: if indoor students with equally high engagement showed similar cognitive gains, this would suggest motivation\u2014not nature\u2014drove the improvement. If they didn't improve as much, nature itself would be implicated. Choice B doesn't distinguish between the two explanations. Choice C introduces physical fitness, a different variable. Choice D discusses teacher workload, which is irrelevant to the causal question."
  },
  {
    id: 33,
    passage: "The island of Nauru, once one of the wealthiest nations per capita in the world due to its phosphate mining industry, now faces severe economic and environmental challenges. Decades of mining stripped approximately 80% of the island's surface, leaving a barren limestone landscape largely unsuitable for agriculture. The phosphate wealth financed lavish government spending and generous trust funds, but poor investment decisions and corruption depleted these reserves. Today, Nauru depends heavily on foreign aid and revenue from hosting an Australian immigration detention center\u2014a far cry from its mid-twentieth-century prosperity.",
    question: "Based on the text, what can most reasonably be inferred about resource-dependent economies?",
    choices: [
      "Wealth derived from a single finite resource can prove unsustainable if not managed with long-term economic diversification in mind.",
      "Small island nations are inherently incapable of managing natural resource wealth effectively.",
      "Phosphate mining is uniquely destructive compared to other forms of resource extraction.",
      "Foreign aid is always an inadequate replacement for revenue generated by natural resource extraction."
    ],
    correct: 0,
    explanation: "Nauru's trajectory\u2014extreme wealth from phosphate, poor management, environmental devastation, current dependence on aid\u2014illustrates the danger of relying on a single finite resource without diversification. Choice B makes a sweeping generalization about 'small island nations' not supported by one example. Choice C compares phosphate mining to other extraction types, which the passage doesn't do. Choice D claims foreign aid is 'always' inadequate, overgeneralizing from one case."
  },
  {
    id: 34,
    passage: "Text 1:\nPsychologist Carol Dweck's research on \"growth mindset\"\u2014the belief that intelligence and abilities can be developed through effort\u2014has been enormously influential in education. Dweck's studies suggest that students who view their abilities as malleable tend to embrace challenges, persist through difficulties, and ultimately achieve more than students with a \"fixed mindset.\"\n\nText 2:\nA 2018 meta-analysis of growth mindset interventions across 37 countries found that while the concept has theoretical merit, the practical effects of mindset interventions on academic achievement were modest at best. The largest benefits appeared among economically disadvantaged students, but for the general student population, the effect sizes were small and often statistically insignificant.",
    question: "Based on the texts, how would the author of Text 2 most likely characterize Dweck's research?",
    choices: [
      "As theoretically sound but with practical applications that may have been overstated in their expected impact on the general student population.",
      "As fundamentally flawed in both its theoretical foundations and its experimental methodology.",
      "As relevant only to economically disadvantaged students and inapplicable to any other demographic group.",
      "As deliberately misleading in order to promote educational products based on the growth mindset framework."
    ],
    correct: 0,
    explanation: "Text 2 acknowledges the concept has 'theoretical merit' (not fundamentally flawed) but finds practical effects were 'modest at best' with 'small and often statistically insignificant' effect sizes for the general population. This aligns with Choice A: theoretically sound but practically overstated. Choice B is too harsh\u2014Text 2 grants theoretical merit. Choice C misreads the data; the meta-analysis found the largest benefits for disadvantaged students, not that it's 'only' relevant to them. Choice D attributes malicious intent not present in Text 2."
  },
  {
    id: 35,
    passage: "Researchers studying the cognitive abilities of New Caledonian crows observed that the birds could solve multi-step problems requiring planning. In one experiment, a crow was presented with food inside a tube that could only be reached with a long stick. The long stick was inside a cage that could only be accessed using a short stick, which was placed in plain view. Without any training, the crow retrieved the short stick, used it to extract the long stick from the cage, and then used the long stick to obtain the food\u2014demonstrating what researchers described as the ability to mentally represent a sequence of actions before executing them.",
    question: "Based on the text, what can most reasonably be inferred about the cognitive processes involved in the crow's behavior?",
    choices: [
      "The crow relied on trial-and-error learning acquired through repeated exposure to similar problems in its natural environment.",
      "The crow's success suggests a capacity for prospective reasoning\u2014anticipating future steps in a problem before physically performing them.",
      "The crow's behavior was instinctive and did not involve any form of higher-order thinking or planning.",
      "The crow's cognitive abilities are equivalent to those of great apes in all measurable domains."
    ],
    correct: 1,
    explanation: "The passage emphasizes that the crow solved the problem 'without any training' and demonstrated 'the ability to mentally represent a sequence of actions before executing them.' This directly supports prospective reasoning\u2014planning ahead. Choice A is contradicted by the 'without any training' detail. Choice C contradicts the passage's description of mental representation. Choice D makes an unsupported equivalence claim about apes."
  },
  {
    id: 36,
    passage: "Architects have long debated whether buildings should be designed primarily to serve practical functions or to express aesthetic ideals. Modernist architect Louis Sullivan famously declared that \"form follows function,\" arguing that a building's appearance should emerge naturally from its intended purpose. His contemporary, Antoni Gaud\u00ed, took a markedly different approach: Gaud\u00ed's structures, such as the Sagrada Fam\u00edlia in Barcelona, subordinated strict functional efficiency to organic, nature-inspired forms that he believed connected architecture to something deeper than mere utility. Neither architect, however, fully abandoned the other's priority\u2014Sullivan's buildings displayed considerable ornamental beauty, while Gaud\u00ed's remained structurally ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "irrelevant, proving that aesthetic architecture inevitably sacrifices practical considerations.",
      "sound, suggesting that the distinction between form and function is less absolute than the debate implies.",
      "identical to Sullivan's, revealing that both architects ultimately followed the same design philosophy.",
      "fragile, requiring extensive renovation within decades of their construction."
    ],
    correct: 1,
    explanation: "The passage builds a nuance argument: Sullivan emphasized function but had 'ornamental beauty'; Gaud\u00ed emphasized aesthetics but\u2014logically\u2014his buildings were also structurally competent. The phrase 'neither architect fully abandoned the other's priority' signals that both approaches incorporated elements of the other. Choice B captures this synthesis. Choice A contradicts the passage's balanced framing. Choice C overstates their similarity. Choice D introduces structural failure not suggested by the text."
  },
  {
    id: 37,
    passage: "Between 1958 and 2023, atmospheric carbon dioxide concentrations measured at the Mauna Loa Observatory in Hawaii rose from 315 parts per million (ppm) to over 420 ppm. The data, known as the Keeling Curve after scientist Charles David Keeling, show not only a long-term upward trend but also a distinctive annual oscillation: CO\u2082 levels dip each Northern Hemisphere summer as vegetation absorbs carbon during the growing season and rise each winter as plants become dormant. Notably, the amplitude of this seasonal oscillation has increased by approximately 15% since measurements began, a change that scientists attribute to longer growing seasons and expanded vegetation in northern latitudes due to warming temperatures.",
    question: "Based on the text, what can most reasonably be inferred about the relationship between climate change and vegetation patterns?",
    choices: [
      "Climate change is reducing the overall amount of vegetation in northern latitudes, leading to higher CO\u2082 levels.",
      "Warming temperatures appear to be intensifying seasonal vegetation cycles in northern regions, creating larger swings in atmospheric CO\u2082.",
      "The Keeling Curve demonstrates that vegetation has no measurable effect on global atmospheric CO\u2082 concentrations.",
      "Seasonal CO\u2082 oscillations are caused entirely by human industrial activity rather than biological processes."
    ],
    correct: 1,
    explanation: "The passage explains that the seasonal oscillation's amplitude increased 15% due to 'longer growing seasons and expanded vegetation in northern latitudes due to warming temperatures.' This means warming is intensifying vegetation's seasonal CO\u2082 absorption-release cycle. Choice A contradicts the passage\u2014vegetation is expanding, not declining. Choice C is wrong; the oscillation itself proves vegetation affects CO\u2082. Choice D contradicts the biological explanation given for the oscillation."
  },
  {
    id: 38,
    passage: "In a 2020 study on decision fatigue, researchers asked judges to evaluate parole applications over the course of a full working day. They found that the probability of a favorable parole decision dropped steadily from approximately 65% at the start of each session to nearly 0% just before a scheduled break. After each break\u2014during which judges ate a meal or snack\u2014the approval rate reset to approximately 65% before declining again. The researchers controlled for the severity of offenses and length of sentences, finding that the timing of a hearing within the session was a stronger predictor of the outcome than the facts of the case.",
    question: "Based on the text, what can most reasonably be inferred about the parole decision-making process described in the study?",
    choices: [
      "Judges intentionally schedule more serious cases at the end of each session to justify higher denial rates.",
      "Factors unrelated to the merits of a case\u2014such as mental fatigue and the timing of breaks\u2014can significantly influence judicial outcomes.",
      "The parole system should be abolished because judges are incapable of making fair decisions.",
      "Decision fatigue affects judges but has no impact on professionals in other high-stakes fields."
    ],
    correct: 1,
    explanation: "The passage shows that 'timing of a hearing within the session was a stronger predictor of the outcome than the facts of the case,' with approval rates dropping to near 0% before breaks and resetting after meals. This directly supports the inference that non-case-related factors (fatigue, timing) significantly affect outcomes. Choice A is contradicted by the control for offense severity. Choice C makes an extreme policy recommendation not warranted by one study. Choice D limits the finding to judges without textual support."
  },
  {
    id: 39,
    passage: "The Rosetta Stone, discovered by French soldiers in Egypt in 1799, bears the same decree inscribed in three scripts: Egyptian hieroglyphics, Demotic script, and ancient Greek. Because scholars could already read Greek, they used the Greek text as a key to decipher the hieroglyphics\u2014a writing system that had been unreadable for nearly 1,400 years. Jean-Fran\u00e7ois Champollion finally cracked the code in 1822, realizing that hieroglyphics were not purely symbolic, as previously assumed, but included phonetic elements representing sounds. This breakthrough unlocked the vast written record of ancient Egyptian civilization, transforming Egyptology from speculation into ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "a discipline no longer reliant on archaeological evidence for understanding Egyptian history.",
      "an evidence-based field capable of directly accessing Egyptian voices across millennia.",
      "a popular hobby that attracted amateur treasure hunters to Egyptian archaeological sites.",
      "a branch of Greek studies, since all Egyptian texts could now be read through their Greek translations."
    ],
    correct: 1,
    explanation: "The passage describes the transformation 'from speculation into' something better. Deciphering hieroglyphics meant scholars could directly read ancient Egyptian texts for the first time in 1,400 years\u2014turning guesswork into evidence-based study with direct access to Egyptian voices. Choice A is too extreme\u2014Egyptology still relies on archaeology alongside textual evidence. Choice C trivializes the breakthrough. Choice D mischaracterizes the decipherment; Champollion decoded hieroglyphics themselves, not just matched them to Greek translations."
  },
  {
    id: 40,
    passage: "Geobiologist Tanja Bosak studies stromatolites\u2014layered rock structures formed by ancient microbial communities\u2014to understand the earliest life on Earth. The oldest known stromatolites, found in Western Australia, date to approximately 3.5 billion years ago, potentially representing the earliest fossil evidence of life. However, some geologists argue that similar layered structures can form through purely chemical processes without biological involvement. Bosak's laboratory experiments have shown that while abiotic processes can produce superficially similar structures, biologically formed stromatolites exhibit distinctive microscale textures, including specific patterns of mineral crystal orientation that are difficult to explain without the presence of living organisms.",
    question: "Based on the text, what can most reasonably be inferred about the challenge of identifying the earliest evidence of life?",
    choices: [
      "It requires distinguishing between biological and non-biological structures that may appear similar at the macroscopic level but differ at microscopic scales.",
      "It is impossible because chemical processes can perfectly replicate all features of biologically produced structures.",
      "It depends entirely on finding intact DNA within ancient rock formations.",
      "It has been definitively resolved by Bosak's laboratory experiments proving all stromatolites are biological."
    ],
    correct: 0,
    explanation: "The passage describes the core challenge: biological and abiotic processes can produce 'superficially similar structures,' but biological ones show 'distinctive microscale textures.' This means identification requires looking beyond surface similarity to microscopic detail. Choice B overstates\u2014Bosak showed abiotic structures lack certain microscale features, meaning they can't 'perfectly replicate' biological ones. Choice C introduces DNA, which the passage doesn't discuss. Choice D overstates Bosak's findings\u2014she showed a method to distinguish, not that all stromatolites are biological."
  },
  {
    id: 41,
    passage: "The practice of \"redlining\"\u2014in which the Home Owners' Loan Corporation (HOLC) graded American neighborhoods from A (\"best\") to D (\"hazardous\") in the 1930s, with predominantly Black neighborhoods invariably assigned the lowest grades\u2014was formally abandoned decades ago. However, a 2020 study by researchers at the University of Richmond found that 74% of neighborhoods graded D in the 1930s remain low-to-moderate income today, while 91% of neighborhoods graded A remain middle-to-upper income. The correlation between 1930s HOLC grades and present-day economic conditions persisted even after the researchers controlled for factors such as proximity to industry, housing density, and geographic location.",
    question: "Based on the text, what can most reasonably be inferred about the legacy of redlining?",
    choices: [
      "Its economic effects have largely been reversed by subsequent fair housing legislation and anti-discrimination policies.",
      "The initial discriminatory classifications created self-reinforcing patterns of disinvestment whose effects persist nearly a century later.",
      "Modern economic inequality between neighborhoods is caused entirely by geographic factors unrelated to historical policy.",
      "The HOLC grading system was based on objective economic criteria rather than racial discrimination."
    ],
    correct: 1,
    explanation: "The passage shows that 1930s HOLC grades\u2014which discriminated against Black neighborhoods\u2014still predict economic outcomes today (74% of D-graded neighborhoods remain low income), even after controlling for other factors. This strongly suggests redlining created lasting, self-reinforcing inequality. Choice A is contradicted by the persistence of disparities. Choice C is wrong because the study controlled for geographic factors. Choice D is contradicted by 'predominantly Black neighborhoods invariably assigned the lowest grades.'"
  },
  {
    id: 42,
    passage: "Paleontologist Mary Anning, who discovered the first correctly identified ichthyosaur skeleton at age twelve on the cliffs of Lyme Regis, England, in 1811, spent her life excavating and selling fossils to support her family. Despite her extensive contributions\u2014including the discoveries of the first complete plesiosaur and the first pterosaur found in Britain\u2014Anning was not eligible to join the Geological Society of London because she was a woman. Many of her finds were described and published by male scientists who often failed to credit her. She was recognized by the Royal Society only posthumously, and her contributions were largely forgotten until historians began reassessing them in the late twentieth century.",
    question: "Based on the text, what can most reasonably be inferred about barriers to scientific recognition in the nineteenth century?",
    choices: [
      "Gender-based exclusion from professional institutions could result in the systematic erasure of individuals' contributions from the scientific record.",
      "Female scientists in the nineteenth century uniformly received less formal education than their male counterparts.",
      "Anning's discoveries were considered scientifically insignificant by her contemporaries.",
      "The Geological Society of London eventually admitted Anning as its first female member during her lifetime."
    ],
    correct: 0,
    explanation: "Anning made major discoveries but couldn't join the Geological Society 'because she was a woman,' her finds were published by men 'who often failed to credit her,' and 'her contributions were largely forgotten.' This pattern demonstrates how institutional gender exclusion led to systematic erasure. Choice B makes a claim about education the passage doesn't address. Choice C contradicts the text\u2014her discoveries (ichthyosaur, plesiosaur, pterosaur) were clearly significant. Choice D contradicts the passage\u2014she was recognized only 'posthumously.'"
  },
  {
    id: 43,
    passage: "Traditional Chinese medicine (TCM) has used artemisinin-containing plants to treat fevers for over two thousand years. In the 1970s, Chinese chemist Tu Youyou, tasked with finding a malaria treatment for soldiers during the Vietnam War, searched ancient medical texts and found a reference to sweet wormwood (Artemisia annua) in a fourth-century manuscript. Crucially, the text specified a cold-water extraction method, which Tu realized would preserve the active compound that heat-based methods destroyed. Her subsequent isolation of artemisinin has since saved millions of lives, and Tu received the Nobel Prize in Physiology or Medicine in 2015. Her work represents a rare case in which ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "modern pharmaceutical research fully replaced traditional medicine as the primary source of drug discovery.",
      "historical knowledge from traditional medical practice directly guided a major breakthrough in contemporary pharmacology.",
      "a Nobel Prize was awarded for work that had no practical medical applications.",
      "ancient medical texts were proven to be uniformly reliable guides to effective treatment."
    ],
    correct: 1,
    explanation: "The passage traces a direct line from a fourth-century TCM text to Tu's Nobel Prize-winning isolation of artemisinin. The 'rare case in which' framing highlights something unusual: historical traditional knowledge directly enabling a modern breakthrough. Choice A is the opposite of what happened\u2014traditional medicine informed the discovery. Choice C contradicts 'saved millions of lives.' Choice D overgeneralizes; the passage describes one successful case, not uniform reliability."
  },
  {
    id: 44,
    passage: "Behavioral ecologist Iain Couzin has demonstrated that large animal groups\u2014from fish schools to locust swarms to flocking birds\u2014can exhibit remarkably coordinated collective behavior without any individual serving as a leader or possessing knowledge of the group's overall pattern. Instead, each animal follows simple local rules: maintain a minimum distance from neighbors, align direction with nearby individuals, and move toward the group's center. Computer simulations show that these three rules alone are sufficient to generate the complex, fluid formations observed in nature. Couzin's research suggests that what appears to be intelligent group-level planning is actually an emergent property arising from ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "the exceptional cognitive abilities of individual animals within the group.",
      "a hierarchical command structure in which dominant individuals direct the movements of subordinates.",
      "simple, repeated interactions among individuals following basic behavioral rules.",
      "genetic programming that encodes the exact formation pattern each species should adopt."
    ],
    correct: 2,
    explanation: "The passage explains that coordinated behavior arises 'without any individual serving as a leader' and from 'simple local rules.' The complex formations are an 'emergent property'\u2014meaning they arise from simple, repeated local interactions rather than top-down planning or individual intelligence. Choice A contradicts the passage (no individual has group-level knowledge). Choice B contradicts the leaderless model. Choice D introduces genetic encoding of 'exact formation patterns,' which contradicts the emergent nature of the behavior."
  },
  {
    id: 45,
    passage: "The concept of \"linguistic relativity,\" associated with linguists Edward Sapir and Benjamin Lee Whorf, proposes that the structure of a language influences its speakers' perception and categorization of the world. A frequently cited example involves the Hopi language, which Whorf claimed lacked tenses for past, present, and future, suggesting that Hopi speakers experienced time differently than English speakers. Subsequent research by linguist Ekkehart Malotki found that Hopi does, in fact, contain temporal markers, undermining Whorf's specific example. Nevertheless, more recent experiments have found subtler effects: speakers of languages that assign grammatical gender to objects (such as Spanish or German) do show measurable differences in how they describe and remember those objects.",
    question: "Based on the text, what can most reasonably be inferred about the current status of the linguistic relativity hypothesis?",
    choices: [
      "It has been entirely discredited because Whorf's claims about the Hopi language were incorrect.",
      "Its strongest claims have been weakened, but more moderate versions of the hypothesis have found empirical support.",
      "It has been fully confirmed by experiments showing that language completely determines thought.",
      "It is no longer studied by linguists because the original evidence was based on inaccurate data."
    ],
    correct: 1,
    explanation: "The passage shows Whorf's strong claim was 'undermin[ed]' but 'more recent experiments have found subtler effects'\u2014language influences (not determines) perception in measurable ways. This supports a weakened but not abandoned version of the hypothesis. Choice A ignores the newer supporting evidence. Choice C goes too far ('completely determines'). Choice D is contradicted by the active research described in the passage."
  },
  {
    id: 46,
    passage: "In a 2019 experiment, researchers tested whether honeybees could understand the concept of zero\u2014a numerical ability that young children typically do not develop until age four. Bees were trained to choose the image with the fewest elements when shown pairs of images containing different numbers of shapes (e.g., two shapes versus five shapes). When the trained bees were then presented with a choice between an image containing one shape and a blank image (representing zero), they selected the blank image significantly more often than chance. The bees also made more errors when comparing zero with one than when comparing zero with larger numbers, mirroring the \"numerical distance effect\" observed in human numerical cognition.",
    question: "Based on the text, what can most reasonably be inferred about honeybee numerical cognition?",
    choices: [
      "Honeybees possess a rudimentary number sense that shares structural features with human numerical processing.",
      "Honeybees have mathematical abilities equal to those of four-year-old human children.",
      "The concept of zero is instinctive in all animal species rather than a learned cognitive skill.",
      "Honeybees' numerical abilities are limited to distinguishing between large and small numbers."
    ],
    correct: 0,
    explanation: "The bees demonstrated understanding of zero and exhibited the 'numerical distance effect'\u2014a pattern 'observed in human numerical cognition.' The parallel between bee and human processing supports the inference that bees have a rudimentary number sense with structural similarities to ours. Choice B equates bee and child abilities, which the passage doesn't claim. Choice C generalizes from bees to 'all animal species.' Choice D is contradicted by the bees' ability to understand zero versus one."
  },
  {
    id: 47,
    passage: "The James Webb Space Telescope (JWST), launched in December 2021, has detected galaxies that appear to have formed within 300 million years of the Big Bang\u2014far earlier than existing cosmological models predicted. These unexpectedly early galaxies are also larger and more luminous than models suggested should be possible given the short time available for star formation and gravitational assembly. While some astronomers propose that early star formation was simply more efficient than assumed, others suggest that the discovery may require more fundamental revisions to the standard model of cosmology, including reconsidering assumptions about the nature of dark matter and the rate of cosmic expansion.",
    question: "Based on the text, what can most reasonably be inferred about the relationship between JWST observations and existing cosmological models?",
    choices: [
      "The observations have confirmed the accuracy of standard cosmological models regarding early galaxy formation.",
      "The observations have introduced data that existing models did not anticipate, potentially necessitating revisions to established theoretical frameworks.",
      "The observations prove that the Big Bang theory is fundamentally incorrect and should be replaced.",
      "The observations are likely the result of instrument calibration errors rather than genuine cosmological phenomena."
    ],
    correct: 1,
    explanation: "The passage states galaxies formed 'far earlier than existing cosmological models predicted' and were 'larger and more luminous than models suggested should be possible,' with some astronomers calling for 'fundamental revisions to the standard model.' This supports Choice B. Choice A contradicts the discrepancy described. Choice C overstates\u2014the text discusses revisions, not abandonment. Choice D introduces instrument error not mentioned in the passage."
  },
  {
    id: 48,
    passage: "Economist Raj Chetty's research team analyzed millions of anonymous tax records to create a detailed map of economic mobility across the United States. Their findings revealed that a child's chance of moving from the bottom fifth to the top fifth of the income distribution varies dramatically by geography\u2014from over 12% in Salt Lake City to less than 4% in Charlotte, North Carolina. The study identified several factors correlated with higher mobility: lower residential segregation by income, lower income inequality, better schools, greater community involvement, and higher proportions of two-parent households. Notably, these factors predicted mobility for all residents of a region, regardless of their own family structure or ________",
    question: "Which choice most logically completes the text?",
    choices: [
      "their willingness to relocate to cities with better economic opportunities.",
      "individual demographic characteristics, suggesting that community-level conditions shape economic outcomes beyond personal circumstances.",
      "the national economic policies in effect during their childhood years.",
      "their level of educational attainment, proving that education has no effect on economic mobility."
    ],
    correct: 1,
    explanation: "The passage emphasizes community-level factors (segregation, inequality, schools, involvement) that predict mobility 'for all residents of a region, regardless of their own family structure.' The logical completion extends this pattern: outcomes are shaped by community conditions beyond individual demographics. Choice A introduces relocation, which isn't discussed. Choice C shifts to national policy, while the passage focuses on local factors. Choice D claims education has 'no effect,' contradicting the passage's finding that 'better schools' correlate with mobility."
  },
  {
    id: 49,
    passage: "The Mpemba effect\u2014the counterintuitive observation that hot water can freeze faster than cold water under certain conditions\u2014has puzzled physicists since it was brought to scientific attention by Tanzanian student Erasto Mpemba in 1963. Despite decades of research, no single explanation has achieved consensus. Proposed mechanisms include faster evaporation reducing the volume of hot water, dissolved gases escaping more readily from hot water, differences in convection currents, and the influence of supercooling. A 2020 study suggested that the effect may involve the weakening of hydrogen bonds at higher temperatures, but other researchers have questioned whether the Mpemba effect is a reliably reproducible phenomenon at all, noting that experimental results vary significantly depending on container shape, water purity, and cooling method.",
    question: "Based on the text, what can most reasonably be inferred about the scientific community's understanding of the Mpemba effect?",
    choices: [
      "It has been fully explained by the 2020 discovery regarding hydrogen bond weakening at high temperatures.",
      "It remains an unsettled question, with debate extending not only to its mechanism but to the reliability of the phenomenon itself.",
      "It is universally dismissed as a myth because experimental results cannot be consistently reproduced.",
      "It will never be explained because the phenomenon violates fundamental laws of thermodynamics."
    ],
    correct: 1,
    explanation: "The passage describes 'no single explanation' achieving 'consensus,' multiple competing mechanisms, and researchers questioning 'whether the Mpemba effect is a reliably reproducible phenomenon at all.' This paints a picture of an unsettled question at multiple levels. Choice A overstates the 2020 study, which was questioned by other researchers. Choice C says 'universally dismissed,' but the passage shows active research continues. Choice D claims thermodynamic impossibility, which the passage never suggests."
  },
  {
    id: 50,
    passage: "Text 1:\nPhilosopher Nick Bostrom has argued that advanced artificial intelligence poses an existential risk to humanity. In his \"paperclip maximizer\" thought experiment, Bostrom envisions an AI system designed to manufacture paperclips that, lacking human values, converts all available matter\u2014including humans\u2014into paperclips or paperclip-manufacturing infrastructure. The scenario illustrates how an AI system pursuing a seemingly benign goal could produce catastrophic outcomes if its objectives are not perfectly aligned with human values.\n\nText 2:\nAI researcher Andrew Ng has characterized fears about existential AI risk as misplaced, comparing them to worrying about overpopulation on Mars. Ng argues that current AI systems are narrow tools incapable of general reasoning, and that focusing on speculative long-term risks diverts attention and resources from pressing real-world problems that AI already causes: algorithmic bias in hiring and lending, surveillance overreach, job displacement, and the concentration of power in a small number of technology companies.",
    question: "Based on the texts, the authors differ most fundamentally in their assessments of which aspect of AI development?",
    choices: [
      "Whether current AI systems are capable of performing useful tasks in commercial applications.",
      "Whether the most urgent AI-related concerns are speculative future risks or concrete present-day harms.",
      "Whether artificial intelligence research should continue to receive government funding.",
      "Whether the paperclip maximizer scenario is technically possible with current hardware."
    ],
    correct: 1,
    explanation: "Bostrom focuses on existential, future-oriented risk (the paperclip maximizer represents a hypothetical catastrophe). Ng argues these fears are 'misplaced' and that attention should go to 'pressing real-world problems that AI already causes.' Their fundamental disagreement is about time horizon and urgency: speculative future risks versus concrete present harms. Choice A isn't debated\u2014both authors acknowledge AI's capabilities. Choice C discusses funding, which neither text addresses. Choice D focuses on a technical detail of one thought experiment rather than the broader disagreement."
  }
];
