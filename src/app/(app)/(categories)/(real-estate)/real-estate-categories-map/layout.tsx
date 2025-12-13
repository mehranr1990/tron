import { ApplicationLayout } from '@/app/(app)/application-layout'
import Header from '@/components/Header/Header'
import { ReactNode } from 'react'

const Layout = async ({ children }: { children: ReactNode }) => {
  return <ApplicationLayout header={<Header/>}>{children}</ApplicationLayout>
}

export default Layout
