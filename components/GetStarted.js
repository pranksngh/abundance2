import CircleBackground from "@/components/CircleBackground";
import { Container } from "@/components/Container";
import { useRouter } from "next/router";

const GetStarted = () => {

    const router = useRouter();
    return (
        <section
            id="get-free-shares-today"
            className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
        >
            <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
                <CircleBackground
                    color="#00ffa0"
                    className="animate-spin-slower"
                />
            </div>
            <Container className="relative">
                <div className="mx-auto max-w-md sm:text-center">
                    <span className="mt-2 text-3xl font-bold tracking-tight text-center sm:text-4xl block bg-gradient-to-r from-primary to-secondary bg-clip-text pb-3 text-transparent sm:pb-5">
                        Experience the Future of Payments
                    </span>

                    <p className="mx-auto mt-5 max-w-prose text-xl text-center text-gray-300">
                        At Abundance, we are dedicated to redifined the way you
                        pay
                    </p>

                   
                </div>
            </Container>
        </section>
    );
};

export default GetStarted;
