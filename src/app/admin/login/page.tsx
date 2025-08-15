import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Admin Login</CardTitle>
          <CardDescription>
            Welcome to Trivandrum Vibes Admin Panel
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="admin" required defaultValue="admin" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required defaultValue="admin1234" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full" asChild>
            <Link href="/admin">Log in</Link>
          </Button>
          <p className="mt-4 text-xs text-center text-muted-foreground">
            Access restricted to authorized personnel only.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
