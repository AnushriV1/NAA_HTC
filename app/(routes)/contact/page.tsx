"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, MapPin, Mail, Phone } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tighter">Get in Touch</h1>
            <p className="text-muted-foreground mt-2 md:text-lg">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  Our team is here to help you make the most of HerNurtureAI. Reach out to us with any questions or
                  feedback.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">support@hernurtureai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday, 9am - 5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">123 Health Street, Digital City, 10001</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-medium mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="Message subject" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Your message" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "How does the mood-based UI work?",
                  a: "Our mood-based UI adapts to how you're feeling. When you log in, you'll be asked about your mood, and the interface will change colors and elements to create a more personalized experience.",
                },
                {
                  q: "Is my health data secure?",
                  a: "Yes, we take data security very seriously. All your health data is encrypted and stored securely. We never share your personal information with third parties without your explicit consent.",
                },
                {
                  q: "How accurate are the AI chatbots?",
                  a: "Our AI chatbots are trained on extensive medical datasets and are designed to provide helpful information. However, they should not replace professional medical advice. Always consult with healthcare providers for medical decisions.",
                },
                {
                  q: "Can I export my activity and journal data?",
                  a: "Yes, you can export all your data in various formats. Go to your profile settings to download your activity logs and journal entries.",
                },
              ].map((faq, i) => (
                <Card key={i} className="p-6">
                  <h3 className="font-medium text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

