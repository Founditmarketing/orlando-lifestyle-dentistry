import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

interface VideoProps {
  id: string;
  title: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoProps> = ({ id, title, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-black aspect-video shadow-lg">
      {!isPlaying ? (
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white text-sm font-medium line-clamp-1">{title}</p>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export const YouTubeGallery: React.FC = () => {
  const videos = [
    { id: "dQw4w9WgXcQ", title: "The 123Teeth™ Patient Experience", thumbnail: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" },
    { id: "dQw4w9WgXcQ", title: "Dr. Mike's Surgical Philosophy", thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
    { id: "dQw4w9WgXcQ", title: "Zygomatic Implants Explained", thumbnail: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
    { id: "dQw4w9WgXcQ", title: "Life After Full Mouth Restoration", thumbnail: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" },
    { id: "dQw4w9WgXcQ", title: "Why Zirconia Matters", thumbnail: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800" },
    { id: "dQw4w9WgXcQ", title: "Patient Success Story: John's Journey", thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4">
              Video Experience
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white">
              See the Transformation
            </h3>
          </div>
          <button className="flex items-center gap-2 text-deep-teal font-sans font-semibold hover:text-oceanic-teal transition-colors">
            Visit Our YouTube Channel <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <VideoCard {...video} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
