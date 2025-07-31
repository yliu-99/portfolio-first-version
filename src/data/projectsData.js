
const fableFragrancesImage = "src/assets/projects/fable-fragrances.png";
const vancouverHorrorShowImage = "src/assets/projects/vancouver-horror-show.png";
const thrashHairImage = "src/assets/projects/thrash.svg";
const apexMountainBikesVid = "https://www.youtube.com/embed/dO7TxaDxEjk?si=Z77HXMo1kgau1YqQ";
const trueHorizonsVid = "https://www.youtube.com/embed/EbJEhks53lA?si=RYiRPDSJ0d7MVQMW";
const mythbustersVid = "https://www.youtube.com/embed/ioG4kkKj6ZM?si=ymFZFlZC33jhShYV";

export const projectsData = [
  {
    id: 'fable',
    title: 'FABLE FRAGRANCES',
    slug: 'fable-fragrances',
    type: 'image',
    media: fableFragrancesImage,
    year: 'Dec 2024',
    description: 'A complete branding and packaging design project for a luxury fragrance line, focusing on mystical and enchanting visual storytelling.',
    chips: ['graphic design', 'photoshop', 'product design', 'branding'],
    category: 'design',
    featured: true
  },
  {
    id: 'vancouver',
    title: 'VANCOUVER HORROR SHOW',
    slug: 'vancouver-horror-show',
    type: 'image',
    media: vancouverHorrorShowImage,
    year: 'Dec 2024',
    description: 'Film festival rebrand focusing on bold typography and horror-inspired visual elements that capture the essence of contemporary horror cinema.',
    chips: ['graphic design', 'branding', 'redesign', 'typography'],
    category: 'design',
    featured: true
  },
  {
    id: 'thrash',
    title: 'THRASH! HAIR COLOUR',
    slug: 'thrash-hair',
    type: 'image',
    media: thrashHairImage,
    year: 'Apr 2025',
    description: 'Edgy product design and branding for an alternative hair color brand, combining punk aesthetics with modern design principles.',
    chips: ['graphic design', 'illustrator', 'product design', 'branding'],
    category: 'design',
    featured: false
  },
  {
    id: 'apex',
    title: 'APEX MOUNTAIN BIKES',
    slug: 'apex-mountain-bikes',
    type: 'video',
    media:  apexMountainBikesVid,
    year: 'Feb 2025',
    description: 'A dynamic commercial showcasing mountain biking culture, featuring original music production and immersive storytelling techniques.',
    chips: ['video', 'music production', 'storytelling', 'cinematography'],
    category: 'video',
    featured: true
  },
  {
    id: 'horizons',
    title: 'TRUE HORIZONS',
    slug: 'true-horizons',
    type: 'video',
    media: trueHorizonsVid,
    year: 'Apr 2025',
    description: 'An emotional narrative piece exploring themes of discovery and personal growth through cinematic storytelling and visual metaphor.',
    chips: ['video', 'storytelling', 'cinematography', 'editing'],
    category: 'video',
    featured: false
  },
  {
    id: 'mythbusters',
    title: 'MYTHBUSTERS',
    slug: 'mythbusters',
    type: 'video',
    media: mythbustersVid,
    year: 'Jul 2025',
    description: 'Motion graphics and sound design work for educational content, combining scientific accuracy with engaging visual storytelling.',
    chips: ['motion graphics', 'sound design', 'storytelling', 'animation'],
    category: 'motion',
    featured: true
  }
];

// Helper functions for filtering and categorizing
export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

export const getAllChips = () => {
  const allChips = projectsData.flatMap(project => project.chips);
  return [...new Set(allChips)].sort();
};

export const getProjectsByChip = (chip) => {
  return projectsData.filter(project => 
    project.chips.some(projectChip => 
      projectChip.toLowerCase().includes(chip.toLowerCase())
    )
  );
};

// Statistics helpers
export const getProjectStats = () => {
  return {
    total: projectsData.length,
    byCategory: {
      design: getProjectsByCategory('design').length,
      video: getProjectsByCategory('video').length,
      motion: getProjectsByCategory('motion').length
    },
    featured: getFeaturedProjects().length,
    mostUsedChips: getAllChips().slice(0, 5) // Top 5 most common skills
  };
};