import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-3xl">HOME PAGE</h2>
      <Button variant={'outline'}>GET STARTED</Button>
    </div>
  )
}
