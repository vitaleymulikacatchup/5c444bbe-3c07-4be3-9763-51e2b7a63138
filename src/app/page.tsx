"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, Utensils, Waves, Users, Bed, Star, Award, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="animatedAurora"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.grandvista.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance in the heart of the city with breathtaking views and world-class amenities"
          tag="Grand Vista Hotel"
          tagIcon={Crown}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g1ca06a1c53edfe68e3b7e0c27dda96624b86777be87dbf31e2e22302f1e0708ad8b31a22c3dcf79fda440a8bf7dc674705ff5012b50b9128b655531c6d4fe34c_1280.jpg",
              imageAlt: "Luxury hotel exterior at golden hour"
            },
            {
              imageSrc: "https://pixabay.com/get/g066fddbb17f7da95496ed77dfad2a0e4562e171dbdcfaf26ea4eaa64bc10744dfd13745b916dfd7fe0dec4ee8e774550563d5f4dab371edd430909b525421efb_1280.jpg",
              imageAlt: "Elegant hotel lobby interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g3a0f25c2d415470f19f4297cc4618be475b1dfe9801de3b966b18d9da48438a355261ec031e661f977d316d94b1f0db11a05741a5b750e3d6cf83f8474e071b1_1280.jpg",
              imageAlt: "Hotel pool area at sunset"
            },
            {
              imageSrc: "https://pixabay.com/get/gcbc7ed21276c5feff002748565d1d9374235ddd0f0fdae8b2f4a5df074280e5eebc1708b8c7ade0a7463b4470ada545ad72a8ced79a3a93c6b70eeb4dc73f56d_1280.jpg",
              imageAlt: "Fine dining restaurant ambiance"
            },
            {
              imageSrc: "https://pixabay.com/get/g6cd3996b69f1c9fdc70a1fab2b8a09c88f0f17bb2b6b055d9b2e72571257f4f6d5e32aa88c9e4f024ee07d0dcf9bca4f9219d5ac842ba42a99e4d494230a20a1_1280.jpg",
              imageAlt: "Luxury spa treatment room"
            },
            {
              imageSrc: "https://pixabay.com/get/g4dbcc58de1b6d2d2554751b9c3c33ebabb47c2a6e5e374c3fb1a2527f0cca2e94a51837cb428b154312415efa90fced11aa16ed4212aab765270618904293184_1280.jpg",
              imageAlt: "Presidential suite bedroom"
            }
          ]}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.grandvista.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We create unforgettable experiences through exceptional hospitality, luxurious accommodations, and personalized service that exceeds every guest's expectations."
          features={[
            {
              icon: Crown,
              title: "Luxury Accommodations",
              description: "Elegantly appointed rooms and suites featuring premium amenities, marble bathrooms, and stunning city or garden views designed for ultimate comfort."
            },
            {
              icon: Utensils,
              title: "World-Class Dining",
              description: "Award-winning restaurants serving internationally inspired cuisine crafted by renowned chefs using the finest locally sourced ingredients."
            },
            {
              icon: Waves,
              title: "Premium Wellness",
              description: "Full-service spa, state-of-the-art fitness center, and rooftop pool providing the perfect sanctuary for relaxation and rejuvenation."
            },
            {
              icon: Users,
              title: "Personalized Service",
              description: "Dedicated concierge team available 24/7 to arrange everything from transportation and dining reservations to exclusive local experiences."
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Exquisite Accommodations"
          description="Choose from our collection of elegantly designed rooms and suites, each offering unique amenities and stunning views"
          tag="Our Rooms"
          tagIcon={Bed}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "deluxe-suite",
              name: "Deluxe Suite",
              price: "$450/night",
              imageSrc: "https://pixabay.com/get/g537cd5d1aa23dffa2bfc1d5933b4b45c0bf4ba41d615f77e0d2b2502966f5044a06073ffa25d1af9c0116d29d6e7b2720bc923396d605b079d880f185f45fc36_1280.jpg",
              imageAlt: "Luxurious deluxe suite with city view",
              onProductClick: () => window.open('https://booking.grandvista.com/deluxe-suite', '_blank')
            },
            {
              id: "executive-room",
              name: "Executive Room",
              price: "$320/night",
              imageSrc: "https://pixabay.com/get/gaccdd5fb684e312e4aea67b44862fd329f9bc894e2debed36057d9e9f0449a59c092e0b050b4dd5927814010b75b2d7a77dfc4747f1e5b584dfcd3f51d26a69d_1280.jpg",
              imageAlt: "Modern executive room with business amenities",
              onProductClick: () => window.open('https://booking.grandvista.com/executive-room', '_blank')
            },
            {
              id: "presidential-suite",
              name: "Presidential Suite",
              price: "$850/night",
              imageSrc: "https://pixabay.com/get/g07fac97eab08edfe2a3c8091d09b0a7cf853bb7ce0d8a3311e0bcf671092dde0730b9af9ebd996b5a78134f6fc2860b2b8da504d34f7d715cc82d9817c2c45c7_1280.jpg",
              imageAlt: "Presidential suite with panoramic city views",
              onProductClick: () => window.open('https://booking.grandvista.com/presidential-suite', '_blank')
            }
          ]}
          buttons={[
            {
              text: "View All Rooms",
              href: "https://booking.grandvista.com/rooms"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Experience the exceptional service and luxury that keeps our guests returning year after year"
          tag="Guest Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO, TechVentures",
              testimonial: "The attention to detail and impeccable service at Grand Vista Hotel exceeded all my expectations. The staff anticipated every need and the amenities were world-class.",
              imageSrc: "https://pixabay.com/get/g627a9e55a4ccf330fbc099258b8f39bf383c4215597e4cc0d44dec25066e3e73be3249e2b3b016dc9ecb04601136098e2bee7157986b802426b0b8d12101f474_1280.jpg",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              testimonial: "From the moment I arrived, I felt like royalty. The concierge service was outstanding and the dining experience was absolutely unforgettable.",
              imageSrc: "https://pixabay.com/get/g40a8bf08bcc32e88b2579479d3e195b99e5c974b6a1fc6a6863ac3ecb15a6a30a623da21d68b41daf86dd698fb4cf1536b4a8f2aa9fb04c89ded3d619c735977_1280.jpg",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Marketing Executive",
              testimonial: "The perfect blend of luxury and comfort. The spa services were divine and the rooftop pool offered breathtaking city views. Will definitely return.",
              imageSrc: "https://pixabay.com/get/g26e066c158ad0603b9c5a022fed286efa445bd3f6407093e98eee04bf1e3ce37798a916a7d7f3970e3fe1e5475393b72437b05027fc149c69ee399a38423d555_1280.jpg",
              imageAlt: "Portrait of Elena Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Business Owner",
              testimonial: "Grand Vista Hotel sets the gold standard for hospitality. Every detail was perfect, from the elegant rooms to the exceptional dining experiences.",
              imageSrc: "https://pixabay.com/get/g634a5261f250f2a6735ec301be9ca01e95e0b8a8a3eb88f1fe70149ff881416da771b78996b14fc1e00387fba3889006c0618335e22c5eb2f74098efc27ba98a_1280.jpg",
              imageAlt: "Portrait of David Thompson"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted by Leading Hospitality Networks"
          description="Recognized and partnered with the world's most prestigious hotel groups and hospitality organizations"
          tag="Our Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g1f028c7da05ae74ad553b4c6b1396b65f11934598fd58154c11cba300fdb65a9e4d6cd10728d0bba6a7932dd30ed3082ddaf465b97e25ba3e93dca0649907275_1280.jpg",
            "https://pixabay.com/get/g4fef8a5e2deebe2136b237040d4ef84f60add8ed07b199939122e88a39583ca8b9ffb2e5be96fac417047a5b6aafa023a4563e24170077702f518f2ea940f5fa_1280.jpg",
            "https://pixabay.com/get/gb132177ff90dc7f70da8b992eae34d1e0a78531a31ae09e5388acedbcf69a6b097a8b695bc40217629f225c267014d7a372f6f7b50d793bd1f142bff520e532b_1280.jpg",
            "https://pixabay.com/get/g27c43f91beb86f924640eaa7c769f775272343b3dd7f8c21fd128231e9282b7902e51fb184cf0541403b2fd082c9f79e870e118c45257d3b4a6ea13ce4a1b479_1280.jpg",
            "https://pixabay.com/get/g013a7ee3e29c3e1c2ccf1496cfec2c01bedb09f5c2dc5586154d748abddce1db89ee72d449659ddb2a1cb0d87cf93f7ff77ebdaff12f3ffba9059558df1bc8f1_1280.jpg",
            "https://pixabay.com/get/g27803593d318fe33d6afeddce2073c065341d12c66a4b48ded6bed07aa753ca6cee66622563b724cec876292177ecfcd741f02034ffa7a239265e8226a4d59a9_1280.jpg",
            "https://pixabay.com/get/g8300793e22b0eb11ef94c71513f3eb2d3a76ac94df71acffd9dd63da00b27f8c7e59900ef90562bc2b086b0913e4c2478c4afac33baebf0ae89e10488934e103_1280.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Book Your Stay"
          tagIcon={Calendar}
          title="Ready to Experience Luxury?"
          description="Subscribe to our newsletter for exclusive offers, room upgrades, and insider access to special events and packages."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive exclusive offers and updates. You can unsubscribe at any time."
          onSubmit={(email) => console.log('Newsletter subscription:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Vista Hotel"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "story" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            },
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Events", href: "events" }
              ]
            },
            {
              items: [
                { label: "Book Direct", href: "https://booking.grandvista.com" },
                { label: "Gift Cards", href: "gift-cards" },
                { label: "Loyalty Program", href: "loyalty" },
                { label: "Special Offers", href: "offers" }
              ]
            },
            {
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Concierge", href: "concierge" },
                { label: "Reviews", href: "reviews" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}