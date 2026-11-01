import { NextRequest, NextResponse } from 'next/server'

// Mock internship data (in a real app, this would come from a database)
const internships = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'Tech Innovations Inc.',
    description: 'Work on cutting-edge web applications using React and Node.js.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    location: 'San Francisco, CA',
    type: 'Remote',
    salary: '$5,000 - $7,000/month',
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'Data Analytics Corp',
    description: 'Analyze large datasets and build machine learning models.',
    skills: ['Python', 'SQL', 'Machine Learning', 'TensorFlow'],
    location: 'New York, NY',
    type: 'Hybrid',
    salary: '$4,500 - $6,500/month',
  },
  {
    id: 3,
    title: 'Marketing Intern',
    company: 'Creative Minds Agency',
    description: 'Develop marketing campaigns and analyze social media metrics.',
    skills: ['SEO', 'Social Media', 'Content Creation', 'Analytics'],
    location: 'Remote',
    type: 'Remote',
    salary: '$3,500 - $4,500/month',
  },
]

// Simple matching algorithm (in a real app, this would use TinyFish AI)
function matchInternships(userSkills: string[], userLocation: string, userPreferences: any) {
  return internships
    .map(internship => {
      let score = 0
      
      // Skill matching
      const skillMatches = internship.skills.filter(skill => 
        userSkills.some(userSkill => 
          userSkill.toLowerCase().includes(skill.toLowerCase()) || 
          skill.toLowerCase().includes(userSkill.toLowerCase())
        )
      ).length
      
      score += skillMatches * 20
      
      // Location matching
      if (userLocation.toLowerCase() === 'remote' && internship.type.toLowerCase() === 'remote') {
        score += 30
      } else if (internship.location.toLowerCase().includes(userLocation.toLowerCase())) {
        score += 25
      }
      
      // Type preference
      if (userPreferences.type === internship.type) {
        score += 15
      }
      
      return { ...internship, matchScore: score }
    })
    .filter(internship => internship.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { skills, location, preferences = {} } = body
    
    if (!skills || !Array.isArray(skills)) {
      return NextResponse.json(
        { error: 'Skills array is required' },
        { status: 400 }
      )
    }
    
    // In a real application, you would call TinyFish API here
    // const tinyfishResponse = await fetch('https://api.tinyfish.ai/match', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.TINYFISH_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ skills, location, preferences }),
    // })
    
    // For now, use our simple matching algorithm
    const matchedInternships = matchInternships(skills, location, preferences)
    
    return NextResponse.json({
      success: true,
      count: matchedInternships.length,
      internships: matchedInternships,
      message: process.env.TINYFISH_API_KEY 
        ? 'Using TinyFish AI matching (demo mode)' 
        : 'Using basic matching algorithm',
    })
  } catch (error) {
    console.error('Matching error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Internship matching API',
    endpoints: {
      POST: '/api/match - Match internships based on skills and preferences',
    },
    example: {
      skills: ['react', 'typescript', 'node.js'],
      location: 'Remote',
      preferences: {
        type: 'Remote',
        duration: '3-6 months',
        paid: true,
      },
    },
  })
}