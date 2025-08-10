import React from 'react';
import { Mic as MicrophoneIcon } from 'lucide-react';
import LuxuryDivider from './LuxuryDivider';

const SpeakerCard = ({
  name,
  title,
  description,
  imageUrl,
}: {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-full w-32 h-32 object-cover mb-4"
      />
      <h3 className="text-xl font-light text-white mb-1">{name}</h3>
      <p className="text-sm text-white/70 mb-2">{title}</p>
      <p className="text-xs text-white/70">{description}</p>
    </div>
  );
};

const Speakers = () => {
  const speakers = [
    {
      name: 'Omar Abulroub',
      title: 'YouTuber & Content Creator',
      description:
        'Omar Abulroub is a prominent YouTuber and content creator known for his engaging and informative videos on a variety of topics. With a passion for education and entertainment, he has amassed a large following and is considered one of the leading online personalities in the region.',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmgmt.manhom.com%2Fimages%2F606821%2F1727701396%2F%25D8%25B9%25D9%2585%25D8%25B1-%25D8%25A3%25D8%25A8.jpg&f=1&nofb=1&ipt=baccb7327d0e0d8d33c90d9b4d242a30658ab16d215a7141db1c19ff6560fc50',
    },
       {
      name: 'Hamra Taştan',
      title: 'Content Creator & Founder',
      description:
        'Content creator and YouTuber (large audience); founder of Hamra Academy and active across Turkey / Kuwait / Jordan.',
      imageUrl: 'https://res.cloudinary.com/dn79b1rvu/image/upload/v1754785398/318475531_1302696336939731_2623812482654891134_n_lwvlog.jpg',
    },
    {
      name: 'Dr. Yazeed Mousa',
      title: 'Psychologist & Behavioural Influence Expert',
      description:
        'International clinical psychologist and lecturer (M.A., PhD) who coaches and researches behavioural influence and life improvement.',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthf.bing.com%2Fth%2Fid%2FOIP.qVWjKRxQfIFHQLENa7slVAHaHa%3Fcb%3Dthfc1%26pid%3DApi&f=1&ipt=849414b0c89c00a0030f9921a03f81dbe59f7db2bdf7bd2dae15a9545410524e',
    },
    {
      name: 'Tameem Sabbagh',
      title: 'Rehabilitation Therapist / Clinician',
      description:
        'Therapist focusing on neurological cases, stroke rehabilitation, musculoskeletal care and elderly home sessions.',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%2Fid%2FOIP.un02mqqnOxyyGLnvRE02ZAHaHa%3Fpid%3DApi&f=1&ipt=78443462a10637b81f1459a7698db9afbfc4e93a32cc0c3b30f29a4a3dd9d82d',
    },
        {
      name: 'Rami Alqwasmi',
      title: 'CEO of Mawdoo3',
      description:
        'Rami Alqwasmi is the CEO of Mawdoo3, the largest Arabic online encyclopedia. He is a visionary leader in the field of Arabic content and technology.',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fsync%2FC4E27AQEnGC50WNbArQ%2Farticleshare-shrink_800%2F0%2F1712211052000%3Fe%3D2147483647%26v%3Dbeta%26t%3DJyASHqAlXOqf-Tq_-TYTUS72IXlzoC3DRCHHLQuM1JE&f=1&nofb=1&ipt=283502f975f0a36e8824b8c5d0c6c6f80de2148d591c83724226c5381cd9edc6',
    },
    {
      name: 'Dr. Sami Hourani',
      title: 'Physician & Social Entrepreneur',
      description:
        'Medical doctor and social entrepreneur - founder of educational and social platforms (e.g., For9a) and active in youth & civic initiatives.',
      imageUrl: 'https://assets.weforum.org/sf_account/image/sHveEiOQ1LFTvJyAfW3M38QlR_EREIWmLd5fggyGEbY.jpg',
    },
    {
      name: 'Sarah Younis (TechMama)',
      title: 'Tech Creator & Product Manager',
      description:
        'First-generation Arab female tech creator: AI, gadgets and product manager/developer who speaks on tech trends and digital product topics.',
      imageUrl: 'https://yt3.googleusercontent.com/l3dhfc-7XK94jBw02oJEaYyaBkMZAzuhV4otwoHrgdH2Vjdi0MmgtDe1vhOlGSyDnYs1rh7Fkg=s1920-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'Haneen Tamimi',
      title: 'Tourette\'s Advocate & Speaker',
      description:
        'Prominent Tourette\'s syndrome ambassador in the Arab world and mental-health / neurodiversity advocate who raises awareness and personal stories.',
      imageUrl: 'https://res.cloudinary.com/dn79b1rvu/image/upload/v1754786516/WhatsApp_Image_2025-08-10_at_03.41.29_e94d8d8d_vousvf.jpg',
    },
    {
      name: 'Afnan Ali',
      title: 'Entrepreneur & Education Founder',
      description:
        'Entrepreneur and founder of EurekaTech Academy and Lam3a Academy, focused on building new generations through tech/education initiatives.',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FC4D22AQEa6ulEdDgAdg%2Ffeedshare-shrink_2048_1536%2Ffeedshare-shrink_2048_1536%2F0%2F1608157735135%3Fe%3D2147483647%26v%3Dbeta%26t%3DUiq61-icbjZ5Fv1TQrUk5iRf8yz_H1EYWxeVP-RxovQ&f=1&nofb=1&ipt=7e6c2587a94ff02ca6c65352cee3d9d1c852daa257e2e83ae7fdfa2a19bea12d',
    },
  ];

  return (
    <section
      id="speakers"
      className="relative bg-black text-white py-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90 z-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 fade-transition">
          <div className="inline-block">
            <LuxuryDivider />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider mt-6 mb-4">
            Our Speakers
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Visionaries and thought leaders who will share their ground-breaking
            ideas at TEDxASPU 2025.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl fade-transition">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
