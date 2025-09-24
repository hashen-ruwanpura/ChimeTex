import React from 'react'
import { 
  Award, 
  Users, 
  Globe, 
  Target, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with clients and manufacturers'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Bringing cutting-edge technology to the Sri Lankan market'
    },
    {
      icon: Target,
      title: 'Commitment',
      description: 'Dedicated to our clients success and industry growth'
    }
  ]

  const milestones = [
    {
      year: '1999',
      title: 'Company Founded',
      description: 'Started as a textile machinery consultancy in Colombo'
    },
    {
      year: '2005',
      title: 'First Major Partnership',
      description: 'Became authorized agents for SSM precision winding technology'
    },
    {
      year: '2010',
      title: 'Expanded Operations',
      description: 'Added Brückner and Lafer to our manufacturer portfolio'
    },
    {
      year: '2015',
      title: 'Technical Excellence',
      description: 'Established dedicated technical support and training center'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched comprehensive digital solutions and remote support'
    },
    {
      year: '2025',
      title: 'Industry Leadership',
      description: 'Leading textile machinery solutions provider in Sri Lanka'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-industrial-900 to-industrial-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
                About Chime Tex International
              </h1>
              <p className="text-xl text-industrial-200 leading-relaxed">
                With over 25 years of excellence in textile machinery solutions, 
                we are Sri Lanka's trusted partner for world-class industrial equipment 
                and comprehensive technical support.
              </p>
            </div>
            <div className="animate-fade-in-up lg:animate-delay-300">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                alt="Our team and facility"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-industrial-600 leading-relaxed">
                <p>
                  Founded in 1999, Chime Tex International (Pvt) Ltd. began with a vision to transform 
                  Sri Lanka's textile industry by providing access to world-class machinery and technology. 
                  What started as a small consultancy has grown into the country's leading textile 
                  machinery solutions provider.
                </p>
                <p>
                  Under the leadership of our Director, Charuka Ruwanpura, we have built strong 
                  partnerships with renowned manufacturers like SSM, Brückner, Lafer, and Zimmer Austria. 
                  These relationships enable us to offer cutting-edge solutions that drive efficiency, 
                  quality, and profitability for our clients.
                </p>
                <p>
                  Today, we serve over 100 satisfied clients across Sri Lanka, having successfully 
                  installed more than 500 machines. Our commitment to excellence, technical expertise, 
                  and customer-centric approach continues to set us apart in the industry.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up lg:animate-delay-300">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=250&fit=crop"
                  alt="Textile machinery"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=300&h=250&fit=crop"
                  alt="Industrial equipment"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=300&h=250&fit=crop"
                  alt="Manufacturing process"
                  className="w-full h-48 object-cover rounded-lg shadow-lg -mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1532617414043-0e2da9fc6ef9?w=300&h=250&fit=crop"
                  alt="Quality control"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              The principles that guide our commitment to clients, partners, and the textile industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up text-center"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-industrial-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-industrial-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              Key milestones that shaped our growth and success in the textile machinery industry.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center animate-fade-in-up ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl card-shadow">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-industrial-800 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-industrial-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving our success and innovation in the textile industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div className="bg-white rounded-xl p-8 card-shadow text-center animate-fade-in-up max-w-sm mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary-600 text-4xl font-bold">CR</span>
              </div>
              <h3 className="text-xl font-semibold text-industrial-800 mb-2">
                Charuka Ruwanpura
              </h3>
              <p className="text-primary-600 font-medium mb-4">
                Director
              </p>
              <p className="text-industrial-600 leading-relaxed">
                With over two decades of experience in the textile machinery industry, 
                Charuka leads our strategic vision and client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Industry Leaders
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 100 satisfied clients who trust us for their textile machinery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              View Our Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
