interface Chapter {
  id: number;
  title: string;
  content: string;
}

interface BookContent {
  bookId: number;
  chapters: Chapter[];
}

export const bookContents: BookContent[] = [
  {
    bookId: 1,
    chapters: [
      {
        id: 1,
        title: "Introduction to Geet Bharati",
        content: `
# Introduction to Geet Bharati

The Bharat Scouts and Guides songbook, "Geet Bharati," is a collection of songs that holds a special place in the Scout and Guide movement in India. These songs not only entertain but also inspire young Scouts and Guides to uphold the values of the movement.

## Purpose of Scout Songs

Scout songs serve multiple purposes in the Scouting movement:

1. **Building Community**: Songs bring people together, creating a sense of belonging and unity.
2. **Preserving Tradition**: Many Scout songs have been passed down through generations, preserving the rich history of Scouting.
3. **Teaching Values**: The lyrics often contain messages about service, friendship, and character development.
4. **Creating Memories**: Songs sung around campfires and at meetings become cherished memories of the Scouting experience.

## Types of Songs in Geet Bharati

The Geet Bharati collection includes various types of songs:

- **Patriotic Songs**: Songs that celebrate our nation and instill a sense of pride
- **Prayer Songs**: Devotional songs that reflect the spiritual aspect of Scouting
- **Camp Songs**: Fun and energetic songs often sung during camps and outings
- **Action Songs**: Songs accompanied by movements and gestures
- **Marching Songs**: Rhythmic songs for parades and formal occasions

Remember that songs are an integral part of the Scouting tradition. They help build character, promote fellowship, and create a positive atmosphere at Scout gatherings.
        `
      },
      {
        id: 2,
        title: "Patriotic Songs",
        content: `
# Patriotic Songs

Patriotic songs form an essential part of the Scout movement, instilling values of citizenship and love for the nation among young Scouts and Guides.

## Popular Patriotic Songs

### Vande Mataram

*Vande Mataram* is one of the most revered patriotic songs that celebrates Mother India. It was written by Bankim Chandra Chattopadhyay and later became a rallying cry during the Indian independence movement.

The song is often sung during the flag ceremony and special national days in Scout gatherings.

### Jan Gan Man

India's national anthem, *Jan Gan Man*, written by Rabindranath Tagore, is an integral part of all Scout functions. It is traditionally sung during the flag hoisting ceremony and formal gatherings.

Scouts and Guides are taught to stand at attention while the national anthem is being played or sung, showing respect to the national symbol.

## Importance in Scouting

Patriotic songs help Scouts and Guides to:

1. Develop a sense of national identity
2. Understand the sacrifices made by freedom fighters
3. Appreciate cultural diversity and unity
4. Foster citizenship and responsibility

During international jamborees and gatherings, these songs also serve as cultural ambassadors, introducing India's rich heritage to Scouts from other countries.

## When to Sing Patriotic Songs

In the Scout and Guide movement, patriotic songs are sung during:

- Flag hoisting and lowering ceremonies
- Republic Day and Independence Day celebrations
- State and National Jamborees
- Official Scout functions and rallies

Learning and singing these songs helps young Scouts and Guides connect with their national heritage while embracing the global brotherhood of Scouting.
        `
      },
      {
        id: 3,
        title: "Prayer Songs",
        content: `
# Prayer Songs

Prayer songs in the Scout and Guide movement reflect the spiritual foundation of Scouting, which respects all faiths while encouraging spiritual growth.

## The Role of Prayer in Scouting

Prayer in Scouting is non-denominational and inclusive. It focuses on universal values like gratitude, service, and personal growth rather than specific religious doctrines.

Baden-Powell, the founder of the Scout movement, believed that spirituality was essential to character development, which is why prayer remains an important element of Scout gatherings.

## Common Prayer Songs

### Daya Kar Dan

*Daya Kar Dan* is a universally loved prayer song in the Indian Scout movement. It asks for blessings of knowledge, good character, and strength to serve others.

The lyrics emphasize values that align with the Scout Promise and Law, making it relevant across different faiths.

### Lab Pe Aati Hai Dua

This prayer song focuses on seeking guidance to walk the right path and serve humanity. It's often sung at the beginning of Scout meetings to set a positive and thoughtful tone.

## When Prayer Songs Are Sung

In the Scout and Guide program, prayer songs are typically sung during:

- Opening and closing ceremonies of meetings
- Before meals at camps (grace)
- Morning assemblies and evening reflections
- Special ceremonies and significant occasions

## Inclusive Approach

The Bharat Scouts and Guides movement emphasizes that prayer songs should be inclusive and respectful of all faiths. Leaders are encouraged to:

- Include prayers from different traditions
- Focus on universal values and themes
- Ensure all members feel comfortable participating
- Use prayer as a time for personal reflection rather than religious instruction

Through prayer songs, Scouts and Guides learn the importance of spiritual values while respecting diversity—a cornerstone of the global Scout movement.
        `
      }
    ]
  },
  {
    bookId: 2,
    chapters: [
      {
        id: 1,
        title: "Introduction to Mapping",
        content: `
# Introduction to Mapping

Welcome to the world of mapping and navigation—essential skills for every Scout. This chapter introduces you to the fundamentals of maps and their importance in outdoor activities.

## What is a Map?

A map is a scaled representation of an area, typically drawn on a flat surface. It shows various features like roads, rivers, hills, and buildings using symbols and colors.

Maps help us to:
- Find our way in unfamiliar terrain
- Plan routes for hikes and expeditions
- Record observations and discoveries
- Communicate locations and directions to others

## Types of Maps Used in Scouting

As a Scout, you will encounter several types of maps:

1. **Topographic Maps**: Show terrain features like hills, valleys, and water bodies using contour lines
2. **Road Maps**: Focus on transportation networks and settlements
3. **Trail Maps**: Highlight hiking paths and points of interest
4. **Sketch Maps**: Simple hand-drawn maps created for specific activities
5. **Digital Maps**: Electronic versions that can be viewed on devices

## Map Reading Skills

Learning to read a map involves understanding:

- **Scale**: The relationship between distances on the map and actual distances on the ground
- **Symbols**: Standardized icons and markings that represent features
- **Direction**: Using the cardinal points (North, South, East, West)
- **Grid References**: Systems for specifying exact locations
- **Contour Lines**: Lines that connect points of equal elevation

## Map Care

Maps are valuable tools that require proper care:

- Keep maps dry by storing them in waterproof cases
- Fold maps properly along existing folds
- Make notes on transparent overlays rather than directly on maps
- Protect maps from strong winds when using them outdoors
- Have backup copies for important expeditions

Developing mapping skills takes practice. In the following chapters, we will explore each aspect of mapping in greater detail, with practical exercises to build your confidence and competence.
        `
      },
      {
        id: 2,
        title: "Map Symbols and Scale",
        content: `
# Map Symbols and Scale

To read a map effectively, you must understand its language—symbols and scale. This chapter covers these essential elements of map reading.

## Map Symbols

Map symbols are standardized icons, colors, and patterns that represent real-world features. Learning these symbols is like learning a new language that allows you to "read" the landscape from paper.

### Common Topographic Map Symbols

#### Natural Features
- **Blue**: Rivers, lakes, and water bodies
- **Green**: Vegetation (forests, woods, orchards)
- **Brown**: Contour lines showing elevation

#### Man-made Features
- **Black/Red**: Roads and transportation networks
- **Black rectangles**: Buildings and structures
- **Purple**: Updates added after the original map was printed

### Legend
Every map includes a legend (or key) that explains the symbols used. Always check the legend when using an unfamiliar map, as symbols can vary between different mapping agencies.

## Understanding Scale

The scale of a map shows the relationship between distances on the map and the corresponding distances on the ground.

### Types of Scale Representation

1. **Ratio Scale**: Expressed as a ratio, such as 1:50,000, meaning 1 unit on the map represents 50,000 of the same units on the ground.

2. **Linear Scale**: A line marked with distances, allowing direct measurement.

3. **Verbal Scale**: A written explanation, such as "One centimeter equals one kilometer."

### Choosing the Right Scale

Different activities require maps of different scales:

- **Small Scale (e.g., 1:250,000)**: Shows a large area with less detail; good for planning long journeys
- **Medium Scale (e.g., 1:50,000)**: Balanced detail and area coverage; ideal for hiking
- **Large Scale (e.g., 1:10,000)**: Shows a small area with great detail; useful for detailed navigation

### Measuring Distances on Maps

To measure straight-line distances:
1. Place a straight edge between two points
2. Mark the distance on the edge
3. Compare with the linear scale or calculate using the ratio scale

For curved routes:
1. Use a piece of string to follow the route
2. Straighten the string and measure its length
3. Convert to ground distance using the scale

## Practice Exercise

Take a standard topographic map and:
1. Identify at least 15 different symbols from the legend
2. Measure the straight-line distance between two prominent features
3. Measure the distance along a winding trail or river

Understanding symbols and scale lays the foundation for all map reading skills. With practice, you'll be able to quickly interpret the landscape represented on paper and use this information for successful navigation.
        `
      },
      {
        id: 3,
        title: "Using a Compass",
        content: `
# Using a Compass

The compass is one of the most important tools for navigation. When used together with a map, it allows you to find your way in any terrain and weather conditions.

## Parts of a Compass

A typical baseplate compass used in Scouting includes:

1. **Magnetic Needle**: The red end points to magnetic north
2. **Rotating Bezel**: Marked with degrees (0-360°)
3. **Direction of Travel Arrow**: Points in the direction you want to go
4. **Orienting Arrow**: Aligns with the magnetic needle when taking bearings
5. **Baseplate**: Clear plastic base with measurement scales
6. **Orienting Lines**: Parallel lines that align with map grid lines

## Types of North

Understanding the different "norths" is critical for accurate navigation:

- **Magnetic North**: Where the compass needle points (constantly changing)
- **True North**: The geographic North Pole
- **Grid North**: The north direction of the map's grid system

Maps usually indicate the difference (declination) between these with a diagram.

## Basic Compass Skills

### Taking a Bearing

1. Place your compass on the map with the edge along your planned route
2. Rotate the bezel until the orienting lines are parallel to the map's north-south grid lines
3. Read the bearing from the index mark (the number aligned with the direction of travel arrow)

### Following a Bearing

1. Hold the compass flat with the direction of travel arrow pointing away from you
2. Rotate your body until the magnetic needle aligns with the orienting arrow
3. Look along the direction of travel arrow and identify a landmark
4. Walk to that landmark and repeat the process

### Back Bearings

A back bearing is used to confirm where you've come from or to return to your starting point:
1. Take your forward bearing
2. Add 180° if the bearing is less than 180°, or subtract 180° if it's more
3. The resulting bearing points back to your origin

## Adjusting for Declination

In some areas, the difference between magnetic north and grid north is significant enough to affect navigation:

1. Check the declination information on your map
2. Adjust your bearings accordingly (add or subtract the declination value)
3. Some compasses have adjustable declination scales to do this automatically

## Tips for Compass Use

- Keep the compass away from metal objects (knives, radios, etc.)
- Hold the compass level when taking readings
- Take multiple bearings to improve accuracy
- Practice regularly in familiar areas before relying on these skills in remote locations

With regular practice, using a compass will become second nature, giving you confidence to navigate in challenging conditions when other indicators (like landmarks or the sun) aren't available.
        `
      }
    ]
  },
  {
    bookId: 3,
    chapters: [
      {
        id: 1,
        title: "Introduction to Scout Guide Pragati Path",
        content: `
# Introduction to Scout Guide Pragati Path

The Pragati Path (Path of Progress) is the advancement program for Scouts and Guides in India. It provides a structured framework for personal development through progressive achievements.

## Philosophy of Pragati Path

The Scout Guide Pragati Path is designed around Baden-Powell's vision of learning by doing. It follows four key principles:

1. **Progressive Development**: Skills and challenges that build upon each other
2. **Personal Challenge**: Activities tailored to individual abilities and interests
3. **Learning by Doing**: Practical, hands-on activities rather than theoretical learning
4. **Recognition of Achievement**: Celebration of milestones through badges and awards

## Structure of the Pragati Path

The Pragati Path consists of several stages, each with progressively challenging requirements:

### For Scouts:
- **Pravesh** (Entry): Basic introduction to Scouting
- **Pratham Sopan** (First Step): Fundamental Scouting skills
- **Dwitiya Sopan** (Second Step): Intermediate skills and community service
- **Tritiya Sopan** (Third Step): Advanced skills and leadership
- **Rashtrapati Scout Award**: The highest award for Scouts

### For Guides:
- **Pravesh** (Entry): Basic introduction to Guiding
- **Pratham Sopan** (First Step): Fundamental Guiding skills
- **Dwitiya Sopan** (Second Step): Intermediate skills and community service
- **Tritiya Sopan** (Third Step): Advanced skills and leadership
- **Rashtrapati Guide Award**: The highest award for Guides

## The Holistic Approach

The Pragati Path covers all aspects of youth development:

- **Physical**: Health, fitness, and outdoor skills
- **Mental**: Knowledge, observation, and problem-solving
- **Spiritual**: Personal values and understanding of faith
- **Social**: Teamwork, citizenship, and community service
- **Emotional**: Self-awareness, expression, and resilience

## How to Use This Handbook

This handbook will guide you through each stage of the Pragati Path:

1. Read the requirements for your current stage
2. Plan activities with your Patrol Leader and Scout/Guide Leader
3. Complete the requirements at your own pace
4. Record your progress in your personal record book
5. Have your achievements verified by appropriate examiners
6. Celebrate your advancement with your Unit

The Pragati Path is not a race. Each Scout and Guide progresses at their own pace, focusing on personal growth rather than competition with others. The journey itself—the skills learned, experiences gained, and friendships formed—is as important as achieving the badges and awards.

Let this handbook be your companion on this exciting journey of growth and discovery.
        `
      },
      {
        id: 2,
        title: "Pravesh (Entry) Requirements",
        content: `
# Pravesh (Entry) Requirements

The Pravesh stage is the entry point to the Scout and Guide movement. It introduces new members to the basic principles, traditions, and activities of Scouting/Guiding.

## Duration
Typically completed in 2-3 months

## Eligibility
- Age: 10-17 years for Scouts/Guides
- Registration as a member of Bharat Scouts & Guides

## Requirements

### 1. Knowledge of Scouting/Guiding

#### 1.1 History
- Know about Lord Baden-Powell and Lady Baden-Powell
- Understand how Scouting/Guiding began
- Know about the beginnings of Scouting/Guiding in India

#### 1.2 Fundamentals
- Learn the Scout/Guide Promise
- Learn the Scout/Guide Law
- Understand the Scout/Guide Motto: "Be Prepared"
- Learn the left handshake and its significance

### 2. Ceremonies and Traditions

#### 2.1 Flag
- Identify the National Flag
- Know the proper way to salute the flag
- Learn how to participate in a flag break ceremony

#### 2.2 Uniform
- Know the parts of the Scout/Guide uniform
- Learn how to wear the uniform correctly
- Understand the significance of the uniform

### 3. Basic Skills

#### 3.1 Knots
- Learn to tie a Reef Knot
- Learn to tie a Sheet Bend
- Understand the practical uses of these knots

#### 3.2 First Aid
- Understand basic treatment for minor cuts and scratches
- Know how to seek help in case of emergency

#### 3.3 Outdoor Skills
- Participate in a nature walk
- Identify 5 plants and 5 animals in your local area

### 4. Activities

#### 4.1 Games
- Learn and participate in 3 Scout/Guide games
- Understand the purpose of games in the movement

#### 4.2 Songs
- Learn the National Anthem
- Learn 2 Scout/Guide songs

#### 4.3 Good Turn
- Perform a daily Good Turn for at least two weeks
- Keep a record of your Good Turns

### 5. Group Participation

#### 5.1 Patrol/Six System
- Understand the Patrol/Six system
- Know your Patrol/Six name and emblem
- Participate in 3 Patrol/Six activities

## Assessment and Recognition

Upon completion of all requirements:
1. The Scout/Guide Leader will conduct an informal evaluation
2. The Pravesh Badge will be presented in a formal investiture ceremony
3. The new Scout/Guide will make the Promise and become a full member

## Next Steps

After completing Pravesh, the Scout/Guide should:
1. Begin working on Pratham Sopan requirements
2. Take more active roles in Patrol/Six activities
3. Explore proficiency badges of personal interest

Remember that Pravesh is just the beginning of your Scouting/Guiding journey. The skills and knowledge gained here form the foundation for all future advancement.
        `
      },
      {
        id: 3,
        title: "Pratham Sopan (First Step)",
        content: `
# Pratham Sopan (First Step)

Pratham Sopan, or the First Step, builds upon the foundational knowledge gained during Pravesh. It introduces more advanced skills and encourages greater participation in the Scout/Guide program.

## Duration
Typically completed in 6-9 months after Pravesh

## Eligibility
- Completion of Pravesh requirements
- Active participation in Unit activities for at least 3 months

## Requirements

### 1. Scouting/Guiding Knowledge

#### 1.1 Organization
- Understand the structure of your local Scout/Guide group
- Know about the District and State organization
- Learn about the Bharat Scouts & Guides National Headquarters

#### 1.2 International Movement
- Know about the World Organization of the Scout Movement (WOSM)
- Know about the World Association of Girl Guides and Girl Scouts (WAGGGS)
- Identify the World Scout/Guide emblem and understand its meaning

### 2. Outdoor Skills

#### 2.1 Woodcraft
- Identify 10 different plants and their uses
- Recognize 5 birds and 5 animals by sight or sound
- Understand principles of conservation and respecting nature

#### 2.2 Camping
- Help pitch and strike a patrol tent
- Know how to care for camping equipment
- Participate in a day camp or overnight camp

#### 2.3 Advanced Knotting
- Master 5 additional knots (Clove Hitch, Bowline, Timber Hitch, Fisherman's Knot, Round Turn and Two Half Hitches)
- Demonstrate practical uses for each knot

### 3. Navigation

#### 3.1 Maps
- Understand map symbols and colors
- Read a simple map of your local area
- Draw a sketch map of the route from your home to your meeting place

#### 3.2 Compass
- Identify the 16 main compass points
- Use a compass to find directions
- Follow a simple compass course

### 4. First Aid and Safety

#### 4.1 First Aid
- Treat minor wounds and burns
- Know how to prevent and treat heat exhaustion and heat stroke
- Make a simple first aid kit and explain the use of each item

#### 4.2 Safety
- Understand road safety rules
- Know fire safety procedures
- Learn water safety guidelines

### 5. Community Service

#### 5.1 Good Turns
- Participate in a group community service project
- Continue daily Good Turns
- Understand the concept of service above self

#### 5.2 Home Help
- Develop skills to help at home (cooking a simple meal, cleaning, minor repairs)
- Practice these skills regularly over a one-month period

### 6. Cultural Activities

#### 6.1 Cultural Heritage
- Learn about your local cultural heritage
- Participate in a cultural activity or performance
- Share aspects of your culture with your Patrol/Six

### 7. Physical Fitness

#### 7.1 Physical Activities
- Participate regularly in physical activities
- Learn and demonstrate 5 physical exercises
- Understand the importance of personal hygiene and regular exercise

## Assessment and Recognition

Upon completion of all requirements:
1. The Scout/Guide Leader, assisted by an examiner, will evaluate the Scout/Guide
2. The Pratham Sopan Badge will be awarded in a formal ceremony
3. The achievement will be recorded in the Scout's/Guide's Progress Card

## Next Steps

After completing Pratham Sopan, the Scout/Guide should:
1. Begin working on Dwitiya Sopan requirements
2. Take on more responsibility within the Patrol/Six
3. Earn at least two proficiency badges

Pratham Sopan represents significant progress in your Scouting/Guiding journey, developing competence in fundamental outdoor and life skills while deepening your commitment to the values of the movement.
        `
      }
    ]
  }
];