import { Link } from 'react-router'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-card border-t border-secondary-header text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FEC</span>
              </div>
              <span className="font-bold text-primary">FECSDC</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building a community of software developers at Faridpur Engineering College.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-secondary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-secondary transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">

                <span>fec.sdc@college.edu</span>
              </div>
              <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">

                <span>Join Discord</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-header pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} FEC Software Development Club. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
