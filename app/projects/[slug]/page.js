import { PROJECTS_DATA } from "../../data/projects";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import ScrollReveal from "../../components/ScrollReveal";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProjectDetail({ params }) {
    const { slug } = await params;
    const project = PROJECTS_DATA.find(p => p.id === slug);

    if (!project) {
        return notFound();
    }

    const images = Array.from({ length: project.pageCount }, (_, i) => `${project.galleryDir}/page_${i + 1}.jpeg`);

    return (
        <main className="project-detail-page">
            <Header visible={true} showStaticLogo={true} />
            <MobileMenu visible={true} />

            <section className="project-hero content-section">
                <ScrollReveal>
                    <h1 className="project-title-large">{project.title}</h1>
                    <div className="project-meta-large">
                        <span>{project.category}</span>
                        <span className="separator">•</span>
                        <span>{project.year}</span>
                    </div>
                    {project.description && (
                        <p className="project-description">{project.description}</p>
                    )}
                </ScrollReveal>
            </section>

            <section className="project-gallery">
                {images.map((src, idx) => (
                    <ScrollReveal key={idx} delay={0.1}>
                        <div 
                            className="project-slide-wrapper"
                            style={{ aspectRatio: project.galleryAspectRatio || "16/9" }}
                        >
                            <img
                                src={src}
                                alt={`${project.title} slide ${idx + 1}`}
                                className="project-slide-image"
                                loading={idx < 2 ? "eager" : "lazy"}
                                style={{ objectFit: project.galleryObjectFit || "cover" }}
                            />
                        </div>
                    </ScrollReveal>
                ))}
            </section>

            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return PROJECTS_DATA.map((project) => ({
        slug: project.id,
    }));
}
