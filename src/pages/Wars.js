import React, { useState } from 'react';
import './Wars.css';

const Wars = () => {
  const [selectedWar, setSelectedWar] = useState(null);

  const wars = [
    {
      id: 1,
      name: 'Indo-Pakistani War of 1947-1948',
      year: '1947-1948',
      location: 'Jammu and Kashmir',
      duration: '14 months',
      icon: '🏔️',
      
      introduction: `The Indo-Pakistani War of 1947-1948, also known as the First Kashmir War, was the first of several armed conflicts between India and Pakistan. This conflict erupted immediately after the partition of British India in August 1947, marking a turbulent beginning to the independence of both nations. The war centered on the princely state of Jammu and Kashmir, whose future became one of the most contentious issues in South Asian history.`,
      
      causeOfWar: `The roots of this conflict lay in the complex circumstances surrounding the partition of British India. When the British departed in August 1947, they left behind over 560 princely states that had to decide whether to accede to India or Pakistan. Jammu and Kashmir, a Muslim-majority state ruled by Hindu Maharaja Hari Singh, found itself in a particularly difficult position due to its strategic location and mixed demographics.

Maharaja Hari Singh initially hoped to remain independent, but this proved untenable as communal violence spread across the subcontinent. In October 1947, Pashtun tribesmen from Pakistan's North-West Frontier Province, allegedly supported by Pakistani military elements, invaded Kashmir. These raiders, known as "Kabalis," advanced rapidly toward Srinagar, the state capital, committing atrocities along the way.

Faced with this invasion and unable to defend his state, Maharaja Hari Singh appealed to India for military assistance. India's leadership, particularly Prime Minister Jawaharlal Nehru and Home Minister Sardar Vallabhbhai Patel, agreed to help but insisted on Kashmir's formal accession to India as a precondition. On October 26, 1947, the Maharaja signed the Instrument of Accession, legally joining Kashmir to India. The very next day, Indian troops were airlifted to Srinagar, marking the beginning of India's military involvement.`,
      
      courseOfWar: `The war unfolded in several distinct phases over fourteen months. The initial phase saw Indian forces, primarily from the 1st Sikh Regiment, being airlifted to Srinagar on October 27, 1947. Their immediate objective was to secure the capital and the vital Srinagar airfield. Despite being outnumbered, Indian troops successfully halted the tribal raiders' advance just outside Srinagar, preventing the fall of the Kashmir Valley.

In the following weeks, Indian forces launched counteroffensives to push back the invaders. The battles were fought in extremely challenging terrain, with troops operating in mountainous regions at high altitudes. Indian forces gradually recaptured key towns including Baramulla and Uri, though the fighting was fierce and casualties mounted on both sides. The winter of 1947-1948 brought additional challenges, with heavy snowfall limiting military operations.

By spring 1948, the conflict had evolved into a more conventional war as Pakistan's regular army became openly involved, though Pakistan officially denied direct military participation. The fighting intensified along multiple fronts, with both sides seeking to control strategic mountain passes and communication routes. Indian forces made significant gains in the Jammu region and parts of the Kashmir Valley, while Pakistani forces and tribal militias held positions in what would later become Pakistan-administered Kashmir.

The war saw several notable military engagements, including the defense of Poonch, where Indian forces and local volunteers withstood a prolonged siege. The battle for Zoji La Pass in May 1948 was particularly significant, as Indian forces, using tanks at high altitude for the first time in military history, broke through to relieve the besieged garrison in Ladakh. Throughout the conflict, both sides demonstrated remarkable courage and endurance in some of the world's most inhospitable terrain.`,
      
      roleOfIndianForces: `The Indian Armed Forces played a crucial role in preventing the complete takeover of Kashmir by hostile forces. The Indian Army, despite being in the early stages of formation after partition and dealing with massive organizational challenges, responded swiftly to the crisis. The rapid airlift of troops to Srinagar remains one of the most successful emergency military deployments in Indian military history.

The Indian Air Force provided critical support throughout the conflict, conducting supply drops to isolated garrisons, evacuating wounded soldiers, and providing air cover for ground operations. The challenging mountain terrain made air support essential for maintaining supply lines to forward positions. The Navy, though less directly involved due to Kashmir's landlocked location, contributed by securing coastal areas and preventing any potential maritime threats.

Indian forces demonstrated exceptional adaptability, fighting in conditions ranging from the plains of Jammu to the high-altitude deserts of Ladakh. Soldiers operated in temperatures ranging from scorching heat to sub-zero conditions, often with limited supplies and equipment. The war also saw the emergence of several military leaders who would shape India's defense establishment in subsequent decades.`,
      
      casualties: `The human cost of the war was significant for both nations. Approximately 1,500 Indian soldiers made the supreme sacrifice, with several thousand more wounded. Civilian casualties were also substantial, particularly in areas affected by the initial tribal invasion. The exact number of casualties on the Pakistani side remains disputed, but estimates suggest comparable or higher losses. Beyond the immediate casualties, the war displaced hundreds of thousands of civilians on both sides of the conflict zone, creating a refugee crisis that persisted for years.`,
      
      outcome: `The war concluded with a United Nations-brokered ceasefire that came into effect on January 1, 1949. By this time, India controlled approximately two-thirds of the former princely state, including the Kashmir Valley, Jammu, and Ladakh. Pakistan held the remaining third, comprising areas now known as Azad Kashmir and Gilgit-Baltistan. The ceasefire line, later formalized as the Line of Control (LoC), became the de facto border between the two nations in Kashmir.

The UN Security Council passed several resolutions calling for a plebiscite to determine Kashmir's future, but the preconditions for such a vote were never met, and the plebiscite never took place. India maintained that Kashmir's accession was legal and final, while Pakistan contested this position, arguing that the Kashmiri people should decide their future through a referendum.`,
      
      longTermImpact: `The 1947-1948 war established Kashmir as the central point of contention between India and Pakistan, a dispute that continues to shape South Asian geopolitics. The conflict set a pattern of military confrontation between the two nations that would repeat itself in 1965, 1971, and 1999. The Line of Control became one of the most heavily militarized borders in the world, with both nations maintaining substantial military presence in the region.

For India, the war highlighted the importance of rapid military mobilization and the need for a strong, well-equipped defense force. It led to significant investments in military infrastructure, particularly in border regions. The conflict also reinforced India's commitment to secularism, as the successful integration of a Muslim-majority region into the Indian Union became a point of national pride and a demonstration of India's pluralistic character.

The war's legacy extends beyond military and political dimensions. It created lasting humanitarian challenges, including the displacement of communities and the division of families across the LoC. The Kashmir issue has influenced India's foreign policy, particularly its relationship with Pakistan and its approach to international mediation. The conflict also established precedents for how India would handle territorial disputes and respond to cross-border aggression in subsequent decades.

From a military perspective, the war provided valuable lessons about mountain warfare, logistics in difficult terrain, and the importance of air power in modern conflicts. These lessons would inform Indian military doctrine and training for generations. The gallantry displayed by Indian soldiers during this conflict, including the award of the first Param Vir Chakra to Major Somnath Sharma (posthumous), established traditions of courage and sacrifice that continue to inspire the Indian Armed Forces.`,
      
      educationalNote: `This account is based on publicly available historical records and is intended for educational purposes. It presents a high-level overview of the conflict without delving into tactical details or classified information. The focus is on understanding the historical context and significance of this war in shaping modern India's defense posture and foreign policy.`
    },
    {
      id: 2,
      name: 'Sino-Indian War',
      year: '1962',
      location: 'Aksai Chin and NEFA (now Arunachal Pradesh)',
      duration: '1 month',
      icon: '⛰️',
      
      introduction: `The Sino-Indian War of 1962 was a brief but significant military conflict between India and the People's Republic of China. Fought in the harsh Himalayan terrain along India's northern borders, this war came as a shock to the Indian nation and had profound implications for India's defense policy, foreign relations, and national psyche. The conflict lasted approximately one month, from October 20 to November 21, 1962, but its impact resonated for decades.`,
      
      causeOfWar: `The origins of the Sino-Indian War lay in long-standing border disputes between the two Asian giants. The primary areas of contention were Aksai Chin in the western sector (part of the erstwhile princely state of Jammu and Kashmir) and the North-East Frontier Agency (NEFA, now Arunachal Pradesh) in the eastern sector. These disputes had their roots in the colonial era, particularly in the ambiguity surrounding the McMahon Line, drawn during the 1914 Simla Convention.

Throughout the 1950s, despite the rhetoric of "Hindi-Chini Bhai-Bhai" (Indians and Chinese are brothers), tensions simmered over these border regions. China had constructed a strategic highway through Aksai Chin connecting Tibet to Xinjiang, which India discovered only in 1957. This revelation shocked Indian leadership and public opinion. Meanwhile, China refused to recognize the McMahon Line as the legitimate border in the eastern sector, claiming large parts of NEFA as South Tibet.

The situation deteriorated through a series of border incidents and diplomatic failures. India's "Forward Policy," initiated in 1961, involved establishing military outposts in disputed areas to assert territorial claims. This policy, implemented despite India's limited military preparedness in these remote regions, was perceived by China as provocative. Simultaneously, India had granted asylum to the Dalai Lama in 1959 following the Tibetan uprising, which China viewed as interference in its internal affairs.

By 1962, the relationship had reached a breaking point. Chinese leadership, particularly Premier Zhou Enlai, had made several attempts at negotiation, but these efforts failed to bridge the fundamental differences in how each nation viewed the border. The Chinese government, dealing with internal challenges following the Great Leap Forward and concerned about its strategic position in Tibet, decided that a military solution was necessary to secure its borders and demonstrate its resolve.`,
      
      courseOfWar: `The war began on October 20, 1962, with simultaneous Chinese offensives in both the western and eastern sectors. The timing was calculated, coinciding with the Cuban Missile Crisis, which diverted international attention. In the eastern sector, Chinese forces attacked Indian positions across the McMahon Line with overwhelming force. The People's Liberation Army (PLA) had been preparing for months, positioning troops and supplies in forward areas while maintaining strict operational security.

Indian forces, spread thin across vast distances and inadequately equipped for high-altitude warfare, found themselves facing a well-prepared and numerically superior enemy. The initial Chinese assault was devastating. In the eastern sector, key Indian positions at Namka Chu were overrun within days. The 7th Infantry Brigade, positioned in tactically disadvantageous locations due to political rather than military considerations, suffered heavy casualties. Indian troops fought bravely despite being outgunned and outmaneuvered, but the strategic situation was untenable.

The first phase of the war lasted until October 28, when China announced a unilateral ceasefire and proposed negotiations. However, this pause was tactical rather than genuine, giving Chinese forces time to consolidate their positions and prepare for the next phase. When India rejected China's terms, which would have required India to accept Chinese territorial gains, the PLA resumed its offensive on November 14.

The second phase was even more devastating for Indian forces. In the eastern sector, Chinese troops advanced rapidly, capturing Tawang and threatening to break into the plains of Assam. The fall of Tawang was particularly significant, as it was a major administrative and military center. In the western sector, Chinese forces consolidated their control over Aksai Chin. Indian forces, hampered by poor logistics, inadequate winter clothing, and obsolete weapons, conducted fighting withdrawals but could not halt the Chinese advance.

The war reached its climax in mid-November when Chinese forces stood poised to advance into the Assam plains. At this critical juncture, on November 21, China announced another unilateral ceasefire and began withdrawing its forces to positions 20 kilometers behind the line of actual control that existed on November 7, 1959. This unexpected decision puzzled many observers, but it achieved China's strategic objectives: demonstrating military superiority, securing Aksai Chin, and teaching India a "lesson" about challenging Chinese territorial claims.`,
      
      roleOfIndianForces: `The Indian Armed Forces faced extraordinary challenges during this conflict. The Army, still developing its mountain warfare capabilities, found itself fighting in some of the world's most difficult terrain against a better-prepared adversary. Despite these disadvantages, Indian soldiers displayed remarkable courage and determination. Units like the 4th Infantry Division in the eastern sector and various battalions in the western sector fought tenaciously, often against overwhelming odds.

Individual acts of heroism were numerous. Major Shaitan Singh of the 13th Kumaon Regiment, commanding a company at Rezang La in the western sector, led his men in a legendary last stand against a massive Chinese assault. Despite being heavily outnumbered and wounded, he and his men fought to the last bullet, with 114 soldiers making the supreme sacrifice. This battle became a symbol of Indian military valor, and Major Shaitan Singh was posthumously awarded the Param Vir Chakra.

The Indian Air Force was largely kept out of the conflict due to political decisions, despite having the capability to provide crucial air support. This decision, made partly from fear of escalation and partly from concerns about Chinese air capabilities, remains controversial. The limited use of air power meant that Indian ground forces lacked the support that might have altered the tactical situation in several engagements.

The war exposed serious deficiencies in India's defense preparedness, including inadequate intelligence about Chinese capabilities and intentions, poor logistics infrastructure in border regions, and insufficient acclimatization and training for high-altitude warfare. These shortcomings were not due to lack of courage among the troops but rather systemic issues in defense planning and political-military coordination.`,
      
      casualties: `The human cost of the war was significant. Approximately 1,400 Indian soldiers were killed in action, with over 1,700 missing (many of whom were later confirmed dead) and nearly 4,000 captured. The wounded numbered in the thousands. Chinese casualties were lower, estimated at around 700 killed, reflecting their superior preparation and tactical advantages. Beyond the military casualties, the war had a profound psychological impact on the Indian nation, shattering the idealistic notions of peaceful coexistence that had characterized India's foreign policy in the 1950s.`,
      
      outcome: `The war ended with China in control of Aksai Chin in the western sector, which it had occupied before the war and continues to hold. In the eastern sector, China withdrew to the McMahon Line after demonstrating its military superiority. The ceasefire line in the western sector became the Line of Actual Control (LAC), though neither country formally recognized it as an international border. India retained control of NEFA (Arunachal Pradesh), but the war had demonstrated the vulnerability of these border regions.

The conflict resulted in no formal peace treaty or border settlement. Instead, it left a legacy of mutual suspicion and unresolved territorial disputes. The border issue remains contentious, with periodic tensions and standoffs occurring along the LAC in subsequent decades, including major confrontations in 1967, 1987, 2013, 2017, and most recently in 2020.`,
      
      longTermImpact: `The 1962 war had far-reaching consequences for India's defense policy and national development. The shock of defeat led to a fundamental reassessment of India's military capabilities and strategic priorities. Defense spending increased dramatically, rising from less than 2% of GDP before the war to over 4% in subsequent years. The government initiated a massive military modernization program, expanding the Army, strengthening the Air Force, and improving defense infrastructure along the borders.

The war led to the creation of the Mountain Divisions specifically trained and equipped for high-altitude warfare. Infrastructure development in border regions became a national priority, with the Border Roads Organization expanding its activities significantly. The conflict also prompted India to develop its defense industry, reducing dependence on foreign suppliers for critical military equipment.

Politically, the war had profound implications. It ended the era of Hindi-Chini Bhai-Bhai and fundamentally altered India's approach to China. The idealistic foreign policy of the 1950s, based on non-alignment and peaceful coexistence, gave way to a more realistic assessment of international relations. India's relationship with the Soviet Union strengthened as it sought a counterweight to China, while relations with the United States, though complicated by Cold War dynamics, saw some improvement.

The war also had domestic political consequences. Prime Minister Jawaharlal Nehru, whose health had been declining, was deeply affected by the defeat. His stature, though still considerable, was diminished, and he passed away in 1964. Defense Minister V.K. Krishna Menon resigned in the wake of the military setbacks. The conflict sparked a national debate about civil-military relations, defense preparedness, and the balance between development and security spending.

From a strategic perspective, the war taught India important lessons about the need for military preparedness, the importance of intelligence gathering, and the dangers of political interference in military planning. These lessons influenced Indian military doctrine and defense policy for decades. The conflict also highlighted the importance of all-weather roads and communication infrastructure in border regions, leading to sustained investment in these areas.

The 1962 war remains a defining moment in modern Indian history, shaping the nation's approach to defense, foreign policy, and border management. It demonstrated that idealism in international relations must be tempered with realism and that national security requires constant vigilance and adequate preparation. The memory of 1962 continues to influence India-China relations and India's strategic thinking in the 21st century.`,
      
      educationalNote: `This account is based on publicly available historical records, official reports, and scholarly research. It is intended for educational purposes to help understand this important chapter in Indian history. The focus is on the broader strategic and historical context rather than tactical military details.`
    },
    {
      id: 3,
      name: 'Indo-Pakistani War of 1965',
      year: '1965',
      location: 'Punjab, Rajasthan, Kashmir',
      duration: '17 days',
      icon: '🛡️',
      
      introduction: `The Indo-Pakistani War of 1965 was the second major armed conflict between India and Pakistan, fought primarily over the disputed region of Kashmir. This seventeen-day war, which took place from August to September 1965, saw the largest tank battles since World War II and demonstrated the evolution of both nations' military capabilities since their first conflict in 1947-1948. The war tested India's military preparedness and resolve, ultimately ending in a stalemate that would shape the subcontinent's strategic landscape for years to come.`,
      
      causeOfWar: `The roots of the 1965 war lay in the unresolved Kashmir dispute and Pakistan's belief that India's military weakness, exposed during the 1962 Sino-Indian War, presented an opportunity to alter the status quo. Pakistani leadership, particularly President Ayub Khan and Foreign Minister Zulfikar Ali Bhutto, calculated that India's military was still recovering from the 1962 debacle and that the international community, preoccupied with the Vietnam War, would not intervene decisively.

The immediate trigger was Pakistan's Operation Gibraltar, launched in August 1965. This operation involved infiltrating thousands of Pakistani soldiers, disguised as local insurgents, into Indian-administered Kashmir with the objective of fomenting an uprising against Indian rule. The plan assumed that the Kashmiri population would rise in support of these infiltrators, leading to a popular rebellion that would force India to negotiate on Kashmir or trigger a limited conflict that Pakistan believed it could win.

The operation was based on several miscalculations. Pakistani planners underestimated Indian military capabilities and overestimated local support for their infiltrators in Kashmir. They also failed to anticipate India's willingness to expand the conflict beyond Kashmir if necessary. The infiltration began in early August 1965, with armed groups crossing the ceasefire line at multiple points. However, instead of sparking a popular uprising, the infiltrators were largely reported to Indian authorities by local Kashmiris, and Indian forces began operations to eliminate them.

As Operation Gibraltar faltered, Pakistan launched Operation Grand Slam on September 1, 1965, a conventional military offensive aimed at capturing the vital town of Akhnoor in Jammu and Kashmir. The capture of Akhnoor would have cut off Indian forces in Kashmir from the rest of India, potentially forcing a strategic withdrawal. This escalation transformed what had been a covert operation into a full-scale war.`,
      
      courseOfWar: `The war unfolded across multiple fronts, with fighting in Kashmir, Punjab, and Rajasthan. Operation Grand Slam initially made significant progress, with Pakistani forces advancing toward Akhnoor. However, the offensive lost momentum due to a controversial change in command at a critical juncture and stiffening Indian resistance. Indian forces, though initially surprised by the scale of the attack, quickly mobilized reinforcements and established defensive positions.

India's response was decisive and unexpected. Rather than limiting the conflict to Kashmir, Indian forces opened a new front by crossing the international border in Punjab on September 6, 1965, advancing toward Lahore, Pakistan's second-largest city. This strategic decision, made by Prime Minister Lal Bahadur Shastri and the military leadership, fundamentally changed the nature of the conflict. By threatening Lahore, India forced Pakistan to divert forces from the Kashmir front to defend its heartland.

The Battle of Asal Uttar, fought from September 8-10, 1965, became one of the war's most significant engagements. Pakistani forces launched a major armored offensive with the objective of cutting off the Indian advance toward Lahore. However, Indian forces, particularly the 4th Mountain Division and supporting armor units, had prepared defensive positions in the sugarcane fields near Asal Uttar. In the ensuing battle, Pakistani armor, including American-supplied Patton tanks, was decisively defeated. India destroyed or captured nearly 100 Pakistani tanks while losing far fewer of its own. This battle demonstrated the effectiveness of Indian defensive tactics and dealt a severe blow to Pakistani military prestige.

Simultaneously, fighting raged in the Sialkot sector, where both sides committed large armored formations. The Battle of Chawinda, one of the largest tank battles since World War II, saw intense fighting over several days. While the battle was tactically inconclusive, with both sides claiming victory, it prevented Pakistan from achieving its objective of cutting off Indian forces in the Sialkot salient. Indian forces, despite facing numerical challenges in some sectors, demonstrated improved tactical proficiency and fighting spirit compared to 1962.

In the Rajasthan sector, Indian forces launched operations to capture strategic positions in the Thar Desert. The town of Munabao and surrounding areas saw significant action, with Indian forces making territorial gains. The desert warfare tested both armies' logistics and endurance in harsh conditions.

The Indian Air Force played a crucial role throughout the conflict, conducting ground attack missions, providing air cover, and engaging Pakistani aircraft in numerous dogfights. Both air forces suffered losses, but the IAF demonstrated its capability to operate effectively in support of ground operations. The war saw the first use of supersonic aircraft in combat in the subcontinent, with both sides flying American-supplied F-86 Sabres and Indian-operated Hawker Hunters and Gnats.

The war's intensity and the threat of further escalation prompted international intervention. The United Nations Security Council called for a ceasefire, and both the United States and Soviet Union pressured the combatants to end hostilities. By September 23, 1965, both nations accepted the ceasefire, though sporadic firing continued for several days afterward.`,
      
      roleOfIndianForces: `The Indian Armed Forces demonstrated significant improvement in capability and performance compared to 1962. The Army, having undergone reorganization and modernization, showed better coordination, tactical flexibility, and fighting spirit. The decision to open multiple fronts and threaten Lahore showed strategic boldness and caught Pakistan off-guard.

Individual acts of valor were numerous. Company Quartermaster Havildar Abdul Hamid of the 4th Grenadiers became a national hero for his actions at Asal Uttar, where he destroyed several Pakistani Patton tanks using a recoilless gun before being killed in action. He was posthumously awarded the Param Vir Chakra. Lieutenant Colonel Ardeshir Tarapore, commanding the 17th Poona Horse, led his armored regiment with exceptional courage in the Sialkot sector, continuing to fight despite being wounded, until he was killed in action. He too received the Param Vir Chakra posthumously.

The Indian Air Force proved its mettle in numerous engagements. Squadron Leader Ajjamada Boppayya Devayya, flying a Hawker Hunter, attacked the heavily defended Sargodha airbase in Pakistan, causing significant damage before his aircraft was hit by anti-aircraft fire. He was posthumously awarded the Maha Vir Chakra. The IAF's Gnat fighters, nicknamed "Sabre Slayers," proved highly effective against Pakistani F-86 Sabres despite being smaller and lighter.

The Indian Navy, though less prominently featured in this conflict, conducted operations to blockade Pakistani ports and protect Indian shipping. The Navy's role would become more significant in future conflicts, but even in 1965, it demonstrated the importance of maritime power in a comprehensive defense strategy.`,
      
      casualties: `The war exacted a significant human cost from both nations. India lost approximately 3,000 soldiers, with several thousand more wounded. Pakistan's casualties were comparable, with estimates ranging from 3,800 to 5,800 killed. Both sides lost substantial military equipment, including tanks, aircraft, and artillery. The civilian population in border areas also suffered, with casualties and displacement affecting thousands of families on both sides of the border.`,
      
      outcome: `The war ended in a military stalemate, with neither side achieving its strategic objectives. Pakistan's attempt to seize Kashmir through Operation Gibraltar had failed completely, and Operation Grand Slam had been thwarted. India's advance toward Lahore had been halted, and while Indian forces had made territorial gains in some sectors, these were modest and came at significant cost.

The Tashkent Agreement, signed on January 10, 1966, under Soviet mediation, formalized the ceasefire. Both nations agreed to withdraw to pre-war positions and to resolve their disputes through peaceful means. The agreement was controversial in both countries, with critics arguing that their side had given up hard-won gains. In India, the agreement was particularly contentious, and Prime Minister Lal Bahadur Shastri's sudden death in Tashkent immediately after signing the agreement added to the controversy and speculation.`,
      
      longTermImpact: `The 1965 war had several important long-term consequences for India's defense posture and strategic thinking. First, it demonstrated that India had recovered from the 1962 debacle and could effectively defend its territory against Pakistan. The improved performance of Indian forces boosted national morale and confidence in the military. The war validated the post-1962 military modernization efforts and highlighted areas requiring further improvement.

Second, the conflict reinforced the importance of self-reliance in defense production. Both India and Pakistan had relied heavily on foreign suppliers for military equipment, and the war led to arms embargoes from major suppliers, particularly the United States. This experience strengthened India's resolve to develop indigenous defense capabilities, leading to increased investment in defense research and production facilities.

Third, the war influenced India's foreign policy alignments. The Soviet Union's role in mediating the Tashkent Agreement and its continued military support strengthened Indo-Soviet ties. This relationship would prove crucial in subsequent years, particularly during the 1971 war. Conversely, the U.S. arms embargo and perceived tilt toward Pakistan during the conflict pushed India further toward the Soviet camp during the Cold War.

Fourth, the war demonstrated the limitations of military solutions to the Kashmir dispute. Despite Pakistan's military efforts, the status quo in Kashmir remained unchanged. This realization, though not immediately apparent, would eventually influence both nations' approaches to the dispute, though tensions and conflicts would continue.

The 1965 war also had important implications for military doctrine and training. The tank battles, particularly at Asal Uttar and Chawinda, provided valuable lessons about armored warfare in the subcontinent's terrain and climate. The importance of combined arms operations, integrating infantry, armor, artillery, and air support, became evident. These lessons were incorporated into military training and doctrine, preparing Indian forces for future conflicts.

For the Indian public, the war was a source of pride and national unity. Unlike 1962, which had been a shock and disappointment, 1965 was seen as a successful defense of the nation against aggression. The war produced numerous heroes whose stories inspired generations. Songs like "Aye Mere Watan Ke Logo," written by poet Kavi Pradeep and sung by Lata Mangeshkar, captured the nation's emotions and became an enduring tribute to the soldiers' sacrifice.

The war also highlighted the importance of political leadership in wartime decision-making. Prime Minister Lal Bahadur Shastri's famous slogan "Jai Jawan Jai Kisan" (Hail the Soldier, Hail the Farmer) resonated with the public and emphasized the connection between national security and agricultural self-sufficiency. His leadership during the crisis, though cut short by his untimely death, set standards for civil-military relations and crisis management.`,
      
      educationalNote: `This account is based on publicly available historical records, military histories, and scholarly research. It is intended for educational purposes to understand this important conflict in India's post-independence history. The focus is on the strategic and historical context rather than detailed tactical information.`
    },
    {
      id: 4,
      name: 'Indo-Pakistani War of 1971',
      year: '1971',
      location: 'East Pakistan (now Bangladesh)',
      duration: '13 days',
      icon: '🇧🇩',
      
      introduction: `The Indo-Pakistani War of 1971 was a watershed moment in South Asian history, resulting in the creation of Bangladesh and representing one of the most decisive military victories in modern warfare. This thirteen-day conflict in December 1971 saw the surrender of over 93,000 Pakistani military personnel, the largest military surrender since World War II. The war was the culmination of a humanitarian crisis in East Pakistan and demonstrated India's military capabilities, strategic planning, and commitment to regional stability.`,
      
      causeOfWar: `The roots of the 1971 war lay in the political and social tensions within Pakistan itself, particularly between its two geographically separated wings. East Pakistan, despite having a larger population than West Pakistan, had long felt economically exploited and politically marginalized by the western wing. The Bengali population of East Pakistan faced systematic discrimination in government, military, and economic opportunities, with Urdu imposed as the national language despite Bengali being the mother tongue of the majority.

The immediate crisis began with Pakistan's general elections in December 1970, the first free and fair elections in the country's history. The Awami League, led by Sheikh Mujibur Rahman and representing East Pakistani interests, won an overwhelming majority, securing 160 of 162 seats allocated to East Pakistan in the National Assembly. This victory should have allowed the Awami League to form the national government, but West Pakistani political and military leadership, particularly President Yahya Khan and Zulfikar Ali Bhutto, refused to transfer power.

On March 25, 1971, the Pakistani military launched Operation Searchlight, a brutal crackdown aimed at suppressing the Bengali nationalist movement. What followed was one of the worst humanitarian catastrophes of the 20th century. The Pakistani military, supported by local collaborators, engaged in systematic violence against the Bengali population. Intellectuals, students, professionals, and Hindu minorities were specifically targeted. Universities, including Dhaka University, were attacked, and entire neighborhoods were destroyed.

The scale of violence was staggering. Estimates of casualties vary, but most credible sources suggest that between 300,000 to 3 million people were killed during the nine-month crisis. Approximately 10 million refugees, mostly Hindus but also Muslims fleeing the violence, crossed into India, creating an enormous humanitarian and economic burden. The refugee camps in Indian states bordering East Pakistan, particularly West Bengal, Tripura, and Assam, struggled to cope with the influx.

India initially responded with humanitarian assistance and diplomatic efforts to resolve the crisis. Prime Minister Indira Gandhi toured world capitals, seeking international intervention to stop the genocide and facilitate a political solution. However, the international response was largely inadequate. The United States, led by President Richard Nixon and Secretary of State Henry Kissinger, maintained support for Pakistan due to its role in facilitating American rapprochement with China. The Soviet Union supported India's position but was cautious about direct involvement.

As the humanitarian crisis deepened and the refugee burden became unsustainable, India began supporting the Mukti Bahini, the Bengali resistance movement fighting for independence. Indian intelligence agencies provided training, weapons, and logistical support to the freedom fighters. By November 1971, it had become clear that a military solution was inevitable. Pakistan, aware of India's preparations and seeking to preempt Indian action, launched preemptive air strikes on Indian airfields on December 3, 1971, officially beginning the war.`,
      
      courseOfWar: `The 1971 war was fought on two fronts: the eastern front in East Pakistan and the western front along the India-Pakistan border. However, the eastern front was the decisive theater, where India's strategic objective was the liberation of East Pakistan and the creation of Bangladesh.

In the eastern theater, Indian forces, under the command of Lieutenant General Jagjit Singh Aurora, executed a brilliantly planned multi-pronged offensive. The strategy involved rapid advances from multiple directions toward Dhaka, the capital of East Pakistan, while avoiding heavily fortified Pakistani positions where possible. Indian forces were organized into four corps, advancing from different directions to encircle and isolate Pakistani forces.

The Indian offensive began on December 3, 1971, immediately following Pakistan's air strikes. Indian forces, working in coordination with the Mukti Bahini, advanced rapidly. The strategy emphasized speed and maneuver over set-piece battles, aiming to reach Dhaka before international pressure could force a ceasefire. Pakistani forces, numbering about 93,000 including military and paramilitary personnel, were spread across East Pakistan in defensive positions, but they were isolated from West Pakistan by 1,000 miles of Indian territory and faced a hostile local population.

The Indian Air Force achieved air superiority within the first few days, conducting strikes on Pakistani airfields, military installations, and communication centers. The IAF's Eastern Air Command flew thousands of sorties, providing close air support to advancing ground forces and interdicting Pakistani supply lines. The Navy's Eastern Fleet blockaded East Pakistani ports, preventing any seaborne reinforcement or escape, and conducted successful operations including the attack on Karachi harbor.

Key battles were fought at Hilli, Bogra, Sylhet, and other strategic locations. At Hilli, in the northern sector, Indian forces faced determined Pakistani resistance, but superior tactics and firepower eventually prevailed. The use of helicopter-borne troops for rapid deployment and the employment of paratroopers to capture key objectives demonstrated the sophistication of Indian military planning.

One of the war's most dramatic moments came on December 11, when Indian paratroopers were dropped near Tangail, north of Dhaka, to cut off the retreat of Pakistani forces and accelerate the advance on the capital. This operation, combined with the rapid advance of ground forces, created panic among Pakistani military leadership in Dhaka.

On the western front, Indian forces conducted defensive operations with limited offensive actions aimed at preventing Pakistan from making territorial gains that could be used as bargaining chips in negotiations. The western front saw intense fighting in Punjab, Rajasthan, and Kashmir, with both sides conducting armored and infantry operations. The Battle of Longewala in Rajasthan, where a small Indian force supported by the Air Force repelled a much larger Pakistani armored column, became legendary.

By December 14, Indian forces had reached the outskirts of Dhaka, and Pakistani resistance was collapsing. Lieutenant General A.A.K. Niazi, commanding Pakistani forces in East Pakistan, realized that further resistance was futile. On December 16, 1971, in a ceremony at the Ramna Race Course in Dhaka, General Niazi signed the Instrument of Surrender, formally surrendering all Pakistani forces in East Pakistan to Lieutenant General Aurora. The surrender of 93,000 military personnel was the largest since World War II and marked the birth of Bangladesh.`,
      
      roleOfIndianForces: `The Indian Armed Forces' performance in 1971 represented the culmination of a decade of modernization and professional development following the 1962 and 1965 wars. The Army demonstrated exceptional planning, coordination, and execution. The multi-pronged offensive in East Pakistan, involving four corps advancing in coordination while maintaining surprise and momentum, showcased sophisticated operational planning.

The Indian Air Force played a crucial role in achieving victory. In the eastern theater, the IAF achieved complete air superiority, allowing ground forces to advance with minimal threat from Pakistani air power. In the western theater, the IAF conducted defensive counter-air operations and ground attack missions. The IAF's performance demonstrated the importance of air power in modern warfare and the effectiveness of India's air defense modernization.

The Indian Navy's role, though often overshadowed by ground and air operations, was significant. The Eastern Fleet's blockade of East Pakistan prevented any external assistance to Pakistani forces and demonstrated India's growing naval capabilities. The attack on Karachi harbor, using missile boats in Operation Trident, was a pioneering use of anti-ship missiles in combat and inflicted significant damage on Pakistani naval assets.

Individual acts of heroism were numerous. Second Lieutenant Arun Khetarpal, commanding a tank troop in the Battle of Basantar on the western front, engaged Pakistani armor with exceptional courage, destroying several enemy tanks before being killed in action. He was posthumously awarded the Param Vir Chakra. Flying Officer Nirmal Jit Singh Sekhon, defending Srinagar airbase against a Pakistani air raid, engaged multiple enemy aircraft single-handedly before being shot down. He too received the Param Vir Chakra posthumously, the only member of the IAF to receive this honor.

The coordination between the Indian Armed Forces and the Mukti Bahini was exemplary. The Mukti Bahini provided crucial intelligence, conducted guerrilla operations that tied down Pakistani forces, and assisted in guiding Indian troops through unfamiliar terrain. This cooperation demonstrated the effectiveness of combining conventional military operations with irregular warfare.`,
      
      casualties: `The human cost of the 1971 war, while significant, was relatively limited given the scale of operations. India lost approximately 3,800 soldiers, with several thousand wounded. Pakistani military casualties were estimated at around 9,000 killed. However, these figures do not include the hundreds of thousands of Bengali civilians killed during the nine-month crisis preceding the war. The war also resulted in the displacement of millions and left deep scars on the region's social fabric.`,
      
      outcome: `The war's outcome was unambiguous: a decisive Indian victory and the creation of Bangladesh as an independent nation. The Simla Agreement, signed by Prime Minister Indira Gandhi and Pakistani President Zulfikar Ali Bhutto in July 1972, formalized the post-war settlement. Under this agreement, India returned 93,000 Pakistani prisoners of war and agreed to return most of the territory captured on the western front in exchange for Pakistan's recognition of Bangladesh and commitment to resolve disputes bilaterally.

The creation of Bangladesh fundamentally altered South Asian geopolitics. Pakistan was reduced in size and population, and its two-nation theory, which had justified partition in 1947 on the basis of religion, was discredited. Bangladesh emerged as the world's eighth most populous country and began its journey as an independent nation, though it would face significant challenges in the decades ahead.`,
      
      longTermImpact: `The 1971 war had profound and lasting implications for India, Pakistan, Bangladesh, and the broader South Asian region. For India, the victory was a source of immense national pride and demonstrated the country's military capabilities and strategic maturity. The war validated India's post-1962 military modernization and established India as the dominant military power in South Asia.

The conflict strengthened India's relationship with the Soviet Union, which had supported India diplomatically and militarily during the crisis. The Indo-Soviet Treaty of Peace, Friendship and Cooperation, signed in August 1971, proved its worth during the war when the Soviet Union vetoed UN Security Council resolutions calling for a ceasefire that would have prevented the liberation of Bangladesh. This relationship would remain a cornerstone of Indian foreign policy until the Soviet Union's collapse in 1991.

For Pakistan, the 1971 defeat was traumatic. The loss of East Pakistan and the humiliation of the largest military surrender since World War II had profound psychological and political impacts. The military's prestige was severely damaged, leading to political upheaval. Yahya Khan was forced to resign, and Zulfikar Ali Bhutto became president. The defeat also intensified Pakistan's security concerns vis-à-vis India and influenced its subsequent strategic choices, including the pursuit of nuclear weapons.

The war demonstrated the importance of political legitimacy and the dangers of military solutions to political problems. Pakistan's attempt to suppress Bengali nationalism through military force had backfired catastrophically, resulting in the loss of half the country. This lesson, though not always heeded, remains relevant in understanding ethnic and regional conflicts.

For Bangladesh, independence came at an enormous cost, but it represented the fulfillment of Bengali nationalist aspirations. The new nation faced immense challenges: a devastated economy, destroyed infrastructure, millions of displaced people, and the trauma of genocide. Sheikh Mujibur Rahman, released from Pakistani prison, became the first Prime Minister and later President of Bangladesh. The country's journey since independence has been marked by both progress and challenges, but the 1971 liberation remains the defining moment of Bangladeshi national identity.

The war also had implications for international relations and the global order. The conflict highlighted the limitations of the United Nations in preventing humanitarian catastrophes and the role of great power politics in regional conflicts. The U.S. tilt toward Pakistan, despite the humanitarian crisis in East Pakistan, damaged American credibility in the region and influenced India's non-aligned foreign policy stance.

From a military perspective, the 1971 war provided valuable lessons about joint operations, the importance of air superiority, the role of naval power in littoral warfare, and the effectiveness of combining conventional military operations with irregular warfare. These lessons were studied by military establishments worldwide and influenced military doctrine and planning.

The war also demonstrated the importance of strategic planning and political-military coordination. India's leadership, particularly Prime Minister Indira Gandhi and the military high command, showed patience in building international support, preparing militarily, and choosing the right moment to act. The decision to wait until Pakistan's preemptive strike provided clear justification for military action showed strategic wisdom.

For the Indian Armed Forces, the 1971 victory remains a source of pride and a benchmark for professional excellence. The war produced numerous heroes and established traditions of courage, professionalism, and joint operations that continue to inspire. December 16 is celebrated as Vijay Diwas (Victory Day) in India, commemorating the surrender of Pakistani forces and honoring the soldiers who fought in the war.

The humanitarian dimension of the 1971 crisis also established precedents for international intervention in cases of genocide and mass atrocities. While the international community's response was inadequate at the time, the Bangladesh crisis contributed to evolving norms about the responsibility to protect civilian populations from mass atrocities, though these norms remain contested and imperfectly implemented.`,
      
      educationalNote: `This account is based on extensive historical documentation, official records, and scholarly research. It is intended for educational purposes to understand this pivotal moment in South Asian history. The focus is on the strategic, political, and humanitarian dimensions of the conflict rather than detailed tactical information. The creation of Bangladesh represents one of the few instances in modern history where military intervention led to the birth of a new nation and the end of a humanitarian catastrophe.`
    },
    {
      id: 5,
      name: 'Kargil War',
      year: '1999',
      location: 'Kargil district, Jammu and Kashmir',
      duration: '2 months',
      icon: '🏔️',
      
      introduction: `The Kargil War of 1999 was a limited but intense conflict between India and Pakistan fought in the high-altitude mountainous terrain of the Kargil district in Jammu and Kashmir. Occurring at the end of the 20th century, this war was significant not only for its military dimensions but also because it was the first armed conflict between two declared nuclear powers. The war tested India's military capabilities, political resolve, and diplomatic skills, ultimately resulting in an Indian victory and the restoration of the status quo along the Line of Control.`,
      
      causeOfWar: `The Kargil War occurred against a backdrop of complex India-Pakistan relations in the late 1990s. In February 1999, Indian Prime Minister Atal Bihari Vajpayee had traveled to Lahore by bus in a historic peace initiative, meeting with Pakistani Prime Minister Nawaz Sharif. The Lahore Declaration, signed during this visit, committed both nations to resolving their disputes peacefully and improving bilateral relations. This diplomatic breakthrough raised hopes for lasting peace in the region.

However, even as these peace talks were underway, elements of the Pakistani military were planning a major operation in the Kargil sector. The operation, conceived primarily by Pakistan's Chief of Army Staff General Pervez Musharraf and a small group of senior officers, involved infiltrating regular Pakistani soldiers, disguised as militants, into Indian territory across the Line of Control. The plan was to occupy strategic heights overlooking the vital Srinagar-Leh highway (National Highway 1A), India's main supply route to Ladakh.

The strategic logic behind the operation, from Pakistan's perspective, was multi-faceted. First, by occupying these heights, Pakistan could threaten India's supply lines to Siachen Glacier and Ladakh, potentially forcing India to negotiate on Kashmir. Second, the operation was designed to appear as an indigenous Kashmiri uprising rather than a Pakistani military action, providing plausible deniability. Third, Pakistan's leadership believed that India, constrained by international pressure and the nuclear dimension, would not escalate the conflict beyond the immediate area.

The infiltration began in early 1999, taking advantage of the winter months when Indian posts in the high-altitude areas are typically vacated due to extreme weather conditions. Pakistani forces, including soldiers from the Northern Light Infantry and other units, occupied positions at heights ranging from 16,000 to 18,000 feet above sea level. These positions provided commanding views of the Srinagar-Leh highway and Indian military installations in the valleys below.

The intrusion was discovered in early May 1999 when local shepherds reported the presence of armed men in areas that should have been unoccupied. Initial Indian reconnaissance patrols confirmed that well-entrenched forces, equipped with artillery and automatic weapons, had occupied multiple strategic peaks. The scale and sophistication of the intrusion made it clear that this was not a militant operation but a planned military incursion involving regular Pakistani forces.

The discovery of the intrusion created a political and military crisis for India. The violation of the Line of Control, coming just months after the Lahore peace initiative, was seen as a betrayal. The Indian government faced pressure to respond decisively while avoiding escalation that could lead to a full-scale war between two nuclear-armed nations. The challenge was to evict the intruders from extremely difficult terrain while maintaining international support and avoiding nuclear escalation.`,
      
      courseOfWar: `The Indian military response, codenamed Operation Vijay, began in mid-May 1999 and continued until mid-July. The operation faced extraordinary challenges: the intruders occupied heights with commanding positions, the terrain was among the most difficult in the world, and the fighting took place at altitudes where the thin air made even basic physical activity exhausting. Indian forces had to attack uphill against well-entrenched positions, a military operation that typically requires a 9:1 numerical advantage for the attacker.

The initial phase involved reconnaissance and assessment of the extent of intrusion. Indian forces discovered that Pakistani troops had occupied positions across a 160-kilometer front, with major concentrations in the Dras, Kaksar, Mushkoh Valley, and Batalik sectors. The intruders had established well-fortified bunkers and had stockpiled ammunition and supplies, indicating long-term planning.

The Indian Army mobilized forces from across the country, including units from the 8th Mountain Division, 3rd Infantry Division, and other formations. The Indian Air Force was called upon to provide close air support, marking the first time since the 1971 war that the IAF was used in offensive operations. However, operating at such high altitudes posed significant challenges for aircraft, reducing their payload capacity and maneuverability.

The fighting was intense and brutal. Indian forces had to scale near-vertical cliffs under enemy fire, often at night, to reach and assault Pakistani positions. The battles for key peaks like Tiger Hill, Tololing, and Point 4875 became legendary for the courage and sacrifice displayed by Indian soldiers. Each peak had to be captured through direct assault, often involving hand-to-hand combat in the final stages.

The Battle of Tololing, fought in June 1999, was one of the first major engagements. The 2nd Rajputana Rifles, 18th Grenadiers, and other units fought for days to capture this strategic peak. The battle involved multiple assaults, with Indian forces suffering casualties from enemy fire and the harsh environment. The capture of Tololing on June 13 was a turning point, boosting Indian morale and demonstrating that the intruders could be evicted despite their advantageous positions.

The Battle of Tiger Hill, the highest peak occupied by Pakistani forces at over 16,000 feet, was perhaps the most significant engagement of the war. The 18th Grenadiers, 8th Sikh, and other units fought from late June through early July to capture this peak. The final assault involved a daring night attack up steep slopes under heavy fire. The recapture of Tiger Hill on July 4, 1999, was celebrated across India and marked a decisive shift in the war's momentum.

The Indian Air Force's role evolved during the conflict. Initially, the IAF conducted reconnaissance missions to assess the extent of intrusion. As the ground offensive intensified, the IAF began flying close air support missions, attacking Pakistani positions with rockets, bombs, and cannon fire. However, the operations were dangerous: two Indian aircraft, a MiG-21 and a MiG-27, were shot down by Pakistani surface-to-air missiles, and a Mi-17 helicopter was also lost. Despite these losses, the IAF continued operations, flying over 550 sorties and playing a crucial role in the eventual victory.

Throughout the conflict, India maintained that its operations were limited to evicting intruders from Indian territory and that Indian forces would not cross the Line of Control. This restraint was crucial in maintaining international support and avoiding escalation. Pakistan, meanwhile, continued to claim that the intruders were Kashmiri militants, though this fiction became increasingly untenable as evidence of Pakistani military involvement mounted, including the recovery of Pakistani military identification documents from killed soldiers.

By early July, Indian forces had recaptured most of the occupied peaks, and Pakistani forces were in retreat. International pressure on Pakistan to withdraw had intensified, particularly from the United States. President Bill Clinton made it clear to Prime Minister Nawaz Sharif that Pakistan must withdraw its forces and that the United States would not support Pakistan's position. Facing military defeat and international isolation, Sharif traveled to Washington on July 4, 1999, and agreed to withdraw Pakistani forces.

The withdrawal was completed by July 26, 1999, officially ending the conflict. Indian forces had successfully evicted the intruders and restored the status quo along the Line of Control. The war had lasted approximately two months and had been fought in some of the most inhospitable terrain on Earth.`,
      
      roleOfIndianForces: `The Indian Armed Forces' performance during the Kargil War demonstrated exceptional courage, professionalism, and adaptability. The Army, facing the daunting task of attacking uphill against entrenched positions at extreme altitudes, showed remarkable determination. Soldiers operated in conditions where the oxygen level was half that at sea level, carrying heavy equipment and ammunition up steep slopes while under enemy fire.

The war produced numerous heroes whose stories inspired the nation. Captain Vikram Batra of 13 JAK Rifles became one of the most celebrated figures of the war. His famous radio transmission "Yeh Dil Maange More" (This heart wants more) after capturing Point 5140 became a national catchphrase. He was killed while rescuing a fellow officer during the assault on Point 4875 and was posthumously awarded the Param Vir Chakra. His courage and sacrifice epitomized the spirit of the Indian soldier.

Grenadier Yogendra Singh Yadav, at just 19 years old, displayed extraordinary bravery during the assault on Tiger Hill. Despite being hit by multiple bullets, he continued climbing and engaged enemy bunkers, enabling his unit to capture the position. He survived his wounds and became the youngest recipient of the Param Vir Chakra. Lieutenant Manoj Kumar Pandey of 1/11 Gorkha Rifles led his men in capturing Khalubar Ridge, continuing to fight despite being grievously wounded. He was posthumously awarded the Param Vir Chakra.

Rifleman Sanjay Kumar of 13 JAK Rifles showed exceptional courage in capturing Area Flat Top, charging enemy bunkers despite being wounded. He survived and was awarded the Param Vir Chakra. These four Param Vir Chakras, along with numerous other gallantry awards, testified to the extraordinary valor displayed during the conflict.

The Indian Air Force, despite the challenges of high-altitude operations and the loss of aircraft, played a crucial role. Pilots flew dangerous missions in thin air, where aircraft performance was degraded and the margin for error was minimal. The IAF's operations demonstrated the importance of air power even in mountain warfare and the courage of pilots willing to risk their lives in support of ground forces.

The Indian Navy, though not directly involved in combat operations, deployed to the Arabian Sea in a show of force, demonstrating India's capability to open additional fronts if necessary. This deployment served as a deterrent against any Pakistani escalation and showcased the Navy's readiness.`,
      
      casualties: `The human cost of the Kargil War was significant. India lost 527 soldiers, with over 1,300 wounded. Many of these casualties occurred during the difficult assaults on fortified positions. Pakistani casualties were estimated to be higher, with various sources suggesting between 700 to 1,000 killed, though Pakistan has never released official figures. The war also resulted in civilian casualties in border areas affected by artillery exchanges.

Beyond the immediate casualties, many soldiers suffered from long-term health effects due to the extreme conditions, including frostbite, altitude sickness, and psychological trauma. The families of the fallen soldiers bore the emotional cost, though the nation's recognition of their sacrifice provided some solace.`,
      
      outcome: `The war ended with a clear Indian victory. All intruders were evicted from Indian territory, and the status quo along the Line of Control was restored. Pakistan's attempt to alter the ground situation through military force had failed, and the operation had backfired politically and diplomatically. Prime Minister Nawaz Sharif, who claimed he had not been fully informed about the operation by the military leadership, faced a political crisis that would culminate in a military coup by General Pervez Musharraf in October 1999.

India's restrained response, limiting operations to its own territory and avoiding escalation across the Line of Control, earned international support. The United States, China, and other major powers called for Pakistani withdrawal and restoration of the Line of Control. This diplomatic victory was as important as the military success.`,
      
      longTermImpact: `The Kargil War had far-reaching implications for India's defense policy, civil-military relations, and approach to Pakistan. The conflict exposed serious intelligence failures, as the massive infiltration had gone undetected for months. This led to a comprehensive review of intelligence gathering and analysis, resulting in reforms in how intelligence agencies operated and coordinated.

The war led to the establishment of the Kargil Review Committee, which conducted a thorough examination of national security management. The committee's recommendations led to significant reforms, including the creation of the National Security Council, the appointment of a National Security Advisor, and improvements in intelligence coordination. These institutional changes strengthened India's national security architecture.

The conflict also highlighted the need for better surveillance and monitoring of the Line of Control. India invested heavily in surveillance technology, including unmanned aerial vehicles, ground sensors, and improved communication systems. The policy of vacating high-altitude posts during winter was reconsidered, with India maintaining year-round presence in critical areas despite the logistical challenges.

The Kargil War demonstrated that even in the nuclear age, limited conventional conflicts remained possible. The conflict occurred just a year after both India and Pakistan had conducted nuclear tests, raising fears of nuclear escalation. However, both nations showed restraint, and the conflict remained limited to the Kargil sector. This experience influenced thinking about nuclear deterrence and the possibility of limited war between nuclear-armed states.

For India's relationship with Pakistan, Kargil represented a major setback for peace efforts. The betrayal of the Lahore peace initiative created deep mistrust and made subsequent peace efforts more difficult. The conflict reinforced the view in India that Pakistan's military establishment could not be trusted and that any peace process must be backed by strong military preparedness.

The war had a profound impact on Indian public consciousness. The extensive media coverage, including television broadcasts from the battlefield, brought the war into Indian homes in unprecedented ways. The courage and sacrifice of Indian soldiers generated immense public support and national pride. The war also highlighted the role of media in modern conflicts and the importance of managing information in the public domain.

The Kargil War led to improvements in military equipment and capabilities. The conflict exposed deficiencies in artillery, night-fighting equipment, and high-altitude warfare gear. Subsequent years saw significant investments in these areas, including the acquisition of Bofors artillery ammunition, night vision devices, and specialized equipment for mountain warfare.

The war also influenced India's approach to military modernization and self-reliance in defense production. The difficulties in obtaining certain types of ammunition and equipment during the conflict highlighted the dangers of import dependence. This experience strengthened the case for indigenous defense production and accelerated programs like the development of the Arjun tank, Tejas aircraft, and various missile systems.

For the Indian Armed Forces, Kargil remains a source of pride and a reminder of the importance of vigilance. July 26 is observed as Kargil Vijay Diwas (Kargil Victory Day), commemorating the successful conclusion of Operation Vijay. The war memorial at Dras, one of the coldest inhabited places on Earth, stands as a tribute to the soldiers who fought and died in the conflict.

The Kargil War also had implications for India's international standing. India's restrained response and adherence to international norms, even while defending its territory, enhanced its reputation as a responsible power. The contrast with Pakistan's actions, including the violation of the Line of Control and the betrayal of peace talks, damaged Pakistan's international standing.

The conflict influenced military doctrine and training across the Indian Armed Forces. The importance of joint operations, with the Army and Air Force working in close coordination, was reinforced. The challenges of high-altitude warfare led to enhanced training programs and the establishment of specialized schools for mountain warfare. The lessons learned from Kargil continue to inform Indian military planning and operations.`,
      
      educationalNote: `This account is based on publicly available information, official reports, and extensive documentation of the Kargil War. It is intended for educational purposes to understand this important conflict in India's recent history. The focus is on the strategic, political, and historical context rather than detailed tactical information. The Kargil War remains a defining moment in India's post-independence military history, demonstrating the nation's resolve to defend its territory and the extraordinary courage of its armed forces.`
    }
  ];

  return (
    <div className="wars-page">
      <div className="container">
        <div className="page-header">
          <h1>Wars After Independence</h1>
          <p>Understanding India's military history through documented conflicts</p>
          <p className="educational-disclaimer">
            These accounts are based on publicly available historical records and are intended for educational purposes. 
            They present high-level overviews without tactical details or classified information.
          </p>
        </div>

        <div className="timeline">
          {wars.map(war => (
            <div key={war.id} className="timeline-item">
              <div className="timeline-marker">
                <span className="war-icon">{war.icon}</span>
              </div>
              <div 
                className={`war-card card ${selectedWar === war.id ? 'expanded' : ''}`}
                onClick={() => setSelectedWar(selectedWar === war.id ? null : war.id)}
              >
                <div className="war-header">
                  <h3>{war.name}</h3>
                  <span className="war-year">{war.year}</span>
                </div>
                
                <div className="war-quick-info">
                  <div className="info-badge">
                    <strong>Location:</strong> {war.location}
                  </div>
                  <div className="info-badge">
                    <strong>Duration:</strong> {war.duration}
                  </div>
                </div>

                <div className="war-introduction">
                  <p>{war.introduction}</p>
                </div>

                {selectedWar === war.id && (
                  <div className="war-details">
                    <div className="detail-section">
                      <h4>Cause of the War</h4>
                      {war.causeOfWar.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="detail-section">
                      <h4>Course of the War</h4>
                      {war.courseOfWar.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="detail-section">
                      <h4>Role of Indian Forces</h4>
                      {war.roleOfIndianForces.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="detail-section">
                      <h4>Casualties</h4>
                      <p>{war.casualties}</p>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Outcome</h4>
                      {war.outcome.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="detail-section">
                      <h4>Long-Term Impact & Significance</h4>
                      {war.longTermImpact.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="detail-section educational-note-section">
                      <p className="educational-note-text">{war.educationalNote}</p>
                    </div>
                  </div>
                )}
                
                <button className="expand-btn">
                  {selectedWar === war.id ? 'Show Less ▲' : 'Read Full History ▼'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wars;