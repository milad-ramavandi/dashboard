import paths from '@/routes/paths'
import { Link } from 'react-router'
import {House, Moon} from "lucide-react"

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4'>
       <div className='flex items-center gap-4'>
        <Link to={paths.home}>
          <House />
        </Link>
        <Moon/>
       </div>
    </header>
  )
}

export default Header