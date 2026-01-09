import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">DevShaheer</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Shaheer Dev. All rights reserved.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-3">
                  <span>m.shaheerrkhan417@gmail.com</span>
                </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
