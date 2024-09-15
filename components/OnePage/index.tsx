import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

interface OnePageProps{
    className?: string;
    children?: JSX.Element | React.ReactNode;
    id?: string;
}

const OnePage: React.FC<OnePageProps> = ({className, children, id}) => {
    return(
        <>
        <div className={`min-h-screen w-full relative flex flex-col items-center ${className}`} id={id}>
            {children}
            <ShootingStars />
            <StarsBackground />
        </div>
        </>
    )
}

export default OnePage;