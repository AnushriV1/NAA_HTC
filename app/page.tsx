import { redirect } from "next/navigation"

export default function RootPage() {
  // Redirect from the root to the login page instead of home
  redirect("/login")
}