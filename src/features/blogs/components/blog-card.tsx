import { AvatarFallback } from "@radix-ui/react-avatar";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/configs/routes";
import type { BlogPost } from "@/features/blogs/types/blogs.types";

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <Card className="group relative overflow-hidden rounded-xl border bg-card/20 p-0 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr]">
                {/* Image Section */}
                <div className="relative aspect-3/2 w-full overflow-hidden bg-muted/20 md:aspect-auto md:h-full md:min-h-56">
                    <Image
                        alt={post.title}
                        className="object-cover object-left"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        src={post.coverImage || "/placeholder.svg"}
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between gap-5 px-6 py-4">
                    <CardHeader className="gap-4 p-0">
                        <div className="flex items-center gap-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <Link href={ROUTES.BLOG(post.slug)}>
                            <CardTitle className="font-bold text-2xl leading-tight tracking-tight transition-colors hover:text-primary">
                                {post.title}
                            </CardTitle>
                        </Link>

                        <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                                <Badge className="font-medium text-xs" key={tag}>
                                    {tag}
                                </Badge>
                            ))}
                            {post.tags.length > 3 && (
                                <Badge className="font-medium text-xs">+{post.tags.length - 3}</Badge>
                            )}
                        </div>
                    </CardHeader>

                    <CardContent className="p-0">
                        <CardDescription className="line-clamp-3 text-base md:line-clamp-4">
                            {post.description}
                        </CardDescription>
                    </CardContent>

                    <CardFooter className="flex items-center justify-between px-0">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage alt={post.author} className="object-cover" src={post.profile} />
                                <AvatarFallback>
                                    {post.author.charAt(0).toUpperCase() +
                                        post.author.charAt(1).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-sm">{post.author}</span>
                        </div>

                        <Button asChild className="group/button hover:bg-primary/10" variant="ghost">
                            <Link
                                aria-label={`Read more about ${post.title}`}
                                className="flex items-center gap-1"
                                href={ROUTES.BLOG(post.slug)}
                            >
                                Read More
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                            </Link>
                        </Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
    );
};
