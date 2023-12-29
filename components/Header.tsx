import { useRouter } from 'next/router';
import React from 'react'


interface HeaderProps {
    children : React.ReactNode;
    className?: string;

}

const  Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();
    const handleLogout = () => {
      //Handle logout in   the future
    }
  return (
    <div>
        Hello Header
    </div>
  )
}

export default Header
