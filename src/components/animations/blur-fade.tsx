import { cn } from "@/lib/utils";

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

/**
 * Server-rendered entrance animation using CSS instead of a client motion tree.
 *
 * @param children - Content to reveal.
 * @param className - Optional extra classes on the wrapper.
 * @param delay - Additional delay in seconds after the shared 40ms offset.
 */
const BlurFade = ({ children, className, delay = 0 }: BlurFadeProps) => (
    <div className={cn("animate-blur-fade", className)} style={{ animationDelay: `${0.04 + delay}s` }}>
        {children}
    </div>
);

export default BlurFade;
