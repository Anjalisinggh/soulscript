"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, Gift, Star, Menu, X } from "lucide-react"

const dateIdeas = [
  {
    id: 1,
    title: "Stargazing Picnic",
    description: "Pack some snacks and find a cozy spot to watch the stars together ✨",
    category: "Romantic",
    icon: "🌟",
    time: "Evening",
    cost: "Free",
  },
  {
    id: 2,
    title: "Coffee Shop Adventure",
    description: "Try a new coffee shop and share your favorite pastries ☕",
    category: "Casual",
    icon: "☕",
    time: "Morning",
    cost: "$",
  },
  {
    id: 3,
    title: "Home Movie Marathon",
    description: "Build a blanket fort and watch your favorite movies together 🎬",
    category: "Cozy",
    icon: "🏠",
    time: "Evening",
    cost: "Free",
  },
  {
    id: 4,
    title: "Sunrise Breakfast",
    description: "Wake up early to watch the sunrise and have breakfast together 🌅",
    category: "Adventure",
    icon: "🌅",
    time: "Early Morning",
    cost: "$",
  },
  {
    id: 5,
    title: "Art Gallery Date",
    description: "Explore local art and create your own masterpieces afterward 🎨",
    category: "Cultural",
    icon: "🎨",
    time: "Afternoon",
    cost: "$$",
  },
  {
    id: 6,
    title: "Beach Sunset Walk",
    description: "Take a romantic walk along the beach as the sun sets 🌊",
    category: "Romantic",
    icon: "🌊",
    time: "Evening",
    cost: "Free",
  },
  {
    id: 7,
    title: "Cooking Together",
    description: "Pick a new recipe and cook a delicious meal together 👨‍🍳",
    category: "Cozy",
    icon: "👨‍🍳",
    time: "Evening",
    cost: "$",
  },
  {
    id: 8,
    title: "Bookstore Browse",
    description: "Wander through a bookstore and pick books for each other 📚",
    category: "Casual",
    icon: "📚",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 9,
    title: "Mini Golf Fun",
    description: "Play mini golf and make silly bets on who wins 🏌️",
    category: "Playful",
    icon: "🏌️",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 10,
    title: "Farmers Market",
    description: "Browse fresh produce and flowers at the local market 🌻",
    category: "Casual",
    icon: "🌻",
    time: "Morning",
    cost: "$",
  },
  {
    id: 11,
    title: "Ice Cream Date",
    description: "Try different flavors and share your favorites 🍦",
    category: "Sweet",
    icon: "🍦",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 12,
    title: "Museum Adventure",
    description: "Discover history and science exhibits together 🏛️",
    category: "Cultural",
    icon: "🏛️",
    time: "Afternoon",
    cost: "$$",
  },
  {
    id: 13,
    title: "Hiking Trail",
    description: "Explore nature trails and enjoy the fresh air 🥾",
    category: "Adventure",
    icon: "🥾",
    time: "Morning",
    cost: "Free",
  },
  {
    id: 14,
    title: "Board Game Night",
    description: "Play your favorite board games with snacks and laughs 🎲",
    category: "Cozy",
    icon: "🎲",
    time: "Evening",
    cost: "Free",
  },
  {
    id: 15,
    title: "Flower Garden Visit",
    description: "Stroll through beautiful gardens and take cute photos 🌺",
    category: "Romantic",
    icon: "🌺",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 16,
    title: "Karaoke Night",
    description: "Sing your hearts out to your favorite songs 🎤",
    category: "Playful",
    icon: "🎤",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 17,
    title: "Thrift Shopping",
    description: "Hunt for vintage treasures and unique finds 👗",
    category: "Casual",
    icon: "👗",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 18,
    title: "Baking Together",
    description: "Make cookies or cupcakes and decorate them cutely 🧁",
    category: "Sweet",
    icon: "🧁",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 19,
    title: "Drive-In Movie",
    description: "Watch a movie under the stars from your car 🚗",
    category: "Romantic",
    icon: "🚗",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 20,
    title: "Puzzle Date",
    description: "Work together on a challenging jigsaw puzzle 🧩",
    category: "Cozy",
    icon: "🧩",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 21,
    title: "Zoo Adventure",
    description: "Visit cute animals and learn about wildlife 🐼",
    category: "Adventure",
    icon: "🐼",
    time: "Morning",
    cost: "$$",
  },
  {
    id: 22,
    title: "Arcade Games",
    description: "Play retro games and win prizes for each other 🕹️",
    category: "Playful",
    icon: "🕹️",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 23,
    title: "Candlelit Dinner",
    description: "Create a romantic dinner at home with candles 🕯️",
    category: "Romantic",
    icon: "🕯️",
    time: "Evening",
    cost: "$",
  },
  {
    id: 24,
    title: "Photography Walk",
    description: "Take photos of each other and beautiful scenery 📸",
    category: "Creative",
    icon: "📸",
    time: "Afternoon",
    cost: "Free",
  },
  {
    id: 25,
    title: "Spa Day at Home",
    description: "Pamper each other with face masks and relaxation 🧖‍♀️",
    category: "Cozy",
    icon: "🧖‍♀️",
    time: "Evening",
    cost: "$",
  },
  {
    id: 26,
    title: "Butterfly Garden",
    description: "Walk through a magical butterfly conservatory 🦋",
    category: "Romantic",
    icon: "🦋",
    time: "Afternoon",
    cost: "$$",
  },
  {
    id: 27,
    title: "Hot Air Balloon",
    description: "Soar above the clouds together (or watch them!) 🎈",
    category: "Adventure",
    icon: "🎈",
    time: "Morning",
    cost: "$$$",
  },
  {
    id: 28,
    title: "Wine Tasting",
    description: "Sample different wines and cheese pairings 🍷",
    category: "Romantic",
    icon: "🍷",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 29,
    title: "Pottery Class",
    description: "Get messy making pottery together like in Ghost 🏺",
    category: "Creative",
    icon: "🏺",
    time: "Afternoon",
    cost: "$$",
  },
  {
    id: 30,
    title: "Aquarium Date",
    description: "Marvel at colorful fish and sea creatures 🐠",
    category: "Adventure",
    icon: "🐠",
    time: "Afternoon",
    cost: "$$",
  },
  {
    id: 31,
    title: "Rooftop Dinner",
    description: "Dine with a view of the city lights 🌃",
    category: "Romantic",
    icon: "🌃",
    time: "Evening",
    cost: "$$$",
  },
  {
    id: 32,
    title: "Bowling Night",
    description: "Strike up some fun with friendly competition 🎳",
    category: "Playful",
    icon: "🎳",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 33,
    title: "Picnic in the Park",
    description: "Pack a basket and enjoy lunch outdoors 🧺",
    category: "Casual",
    icon: "🧺",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 34,
    title: "Dance Class",
    description: "Learn salsa, swing, or ballroom dancing together 💃",
    category: "Romantic",
    icon: "💃",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 35,
    title: "Escape Room",
    description: "Solve puzzles and escape together as a team 🔐",
    category: "Adventure",
    icon: "🔐",
    time: "Afternoon",
    cost: "$$",
  },
  {
    id: 36,
    title: "Food Truck Tour",
    description: "Try different cuisines from various food trucks 🚚",
    category: "Casual",
    icon: "🚚",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 37,
    title: "Planetarium Show",
    description: "Learn about the cosmos in a dome theater 🌌",
    category: "Cultural",
    icon: "🌌",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 38,
    title: "Bike Ride",
    description: "Cycle through scenic routes and parks 🚴",
    category: "Adventure",
    icon: "🚴",
    time: "Morning",
    cost: "Free",
  },
  {
    id: 39,
    title: "Comedy Show",
    description: "Laugh together at a local comedy club 😂",
    category: "Playful",
    icon: "😂",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 40,
    title: "Scavenger Hunt",
    description: "Create a romantic scavenger hunt for each other 🗺️",
    category: "Creative",
    icon: "🗺️",
    time: "Afternoon",
    cost: "Free",
  },
  {
    id: 41,
    title: "Hot Chocolate Date",
    description: "Cozy up with warm drinks and marshmallows ☕",
    category: "Cozy",
    icon: "☕",
    time: "Evening",
    cost: "$",
  },
  {
    id: 42,
    title: "Vintage Market",
    description: "Browse antiques and vintage treasures together 🕰️",
    category: "Casual",
    icon: "🕰️",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 43,
    title: "Laser Tag",
    description: "Battle it out in a futuristic laser tag arena 🔫",
    category: "Playful",
    icon: "🔫",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 44,
    title: "Cooking Class",
    description: "Learn to make a new cuisine together 👨‍🍳",
    category: "Cultural",
    icon: "👨‍🍳",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 45,
    title: "Lighthouse Visit",
    description: "Climb a lighthouse and enjoy ocean views 🗼",
    category: "Adventure",
    icon: "🗼",
    time: "Afternoon",
    cost: "$",
  },
  {
    id: 46,
    title: "Paint & Sip",
    description: "Paint masterpieces while sipping your favorite drinks 🎨",
    category: "Creative",
    icon: "🎨",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 47,
    title: "Cherry Blossom Walk",
    description: "Stroll under blooming cherry trees in spring 🌸",
    category: "Romantic",
    icon: "🌸",
    time: "Afternoon",
    cost: "Free",
  },
  {
    id: 48,
    title: "Ice Skating",
    description: "Glide on ice and hold hands (or help each other up!) ⛸️",
    category: "Playful",
    icon: "⛸️",
    time: "Evening",
    cost: "$$",
  },
  {
    id: 49,
    title: "Sunrise Yoga",
    description: "Practice yoga together as the sun rises 🧘",
    category: "Adventure",
    icon: "🧘",
    time: "Early Morning",
    cost: "Free",
  },
  {
    id: 50,
    title: "Love Letter Writing",
    description: "Write heartfelt letters to read in the future 💌",
    category: "Romantic",
    icon: "💌",
    time: "Evening",
    cost: "Free",
  },
]

const loveNotes = [
  "You make every day brighter just by being in it 🤍",
  "Your smile is my favorite sight in the whole world 😘",
  "Thank you for being the sweetest part of my life 😭 ",
  "You're not just my boyfriend, you're my best friend too 💕",
  "Every moment with you feels like a beautiful dream ✨",
  "Your hugs are my safe place 🤗",
  "You make ordinary moments feel magical 🪄",
  "I love how you make me laugh even on tough days 😄",
  "Your kindness makes my heart flutter like butterflies 🦋",
  "I fall in love with you more every single day 💖",
  "You're the reason I believe in fairy tales 🧚‍♀️",
  "Your voice is my favorite sound in the universe 🎵",
  "I love the way you look at me like I'm your whole world 🌍",
  "You make me want to be the best version of myself 🌟",
  "Every love song reminds me of you 🎶",
  "Your hand fits perfectly in mine, like we were made for each other 🤝",
  "I love how you remember the little things that matter to me 💭",
  "You're my favorite hello and hardest goodbye 👋",
  "Your laugh is the most beautiful music to my ears 🎼",
  "I love how you make me feel like the luckiest person alive 🍀",
  "You're my sunshine on cloudy days ⛅",
  "I love the way you care for everyone around you 💝",
  "Your eyes hold all the stars I could ever wish upon ⭐",
  "You make my heart skip beats like a love song 💓",
  "I love how you believe in me even when I don't believe in myself 🌈",
  "You're the missing piece that makes my puzzle complete 🧩",
  "I love how you make even grocery shopping feel like an adventure 🛒",
  "Your goodness inspires me to be better every day 🌱",
  "I love the way you dance like nobody's watching 💃",
  "You're my favorite person to do absolutely nothing with 😌",
  "I love how you make me feel beautiful inside and out 💄",
  "Your heart is the most beautiful thing about you 💗",
  "I love how you turn my house into a home 🏡",
  "You're the sweetest dream I never want to wake up from 😴",
  "I love how you make me feel safe to be completely myself 🦋",
  "Your love feels like coming home after a long journey 🏠",
  "I love the way you surprise me with little acts of love 🎁",
  "You're my favorite chapter in the story of my life 📖",
  "I love how you make me believe in forever 💍",
  "Your presence is the greatest present I could ask for 🎀",
  "I love how you make me feel like I can conquer the world 🌎",
  "You're the reason I wake up with a smile every morning 😊",
  "I love how you love me, flaws and all 💕",
  "Your love is the anchor that keeps me grounded ⚓",
  "I love how you make every day feel like Valentine's Day 💘",
  "You're my favorite notification, my favorite call, my favorite everything 📱",
  "I love how you make me feel like I'm living in a romance movie 🎬",
  "Your love is the greatest adventure of my life 🗺️",
  "I love how you make me feel like the main character in my own story 👑",
  "You're not just my love, you're my everything 💖",
]

type CuteSticker = { type: string; src?: string; alt?: string; content?: string }

const cuteStickers: CuteSticker[] = [
  { type: "image", src: "/img1.jpg", alt: "Cute sticker 1" },
  { type: "image", src: "/img2.jpg", alt: "Love sticker" },
  { type: "image", src: "/img3.jpg", alt: "Heart sticker" },
  { type: "image", src: "/img4.jpg", alt: "Kiss sticker" },
  { type: "image", src: "/img5.jpg", alt: "Hug sticker" },
  { type: "image", src: "/img6.jpg", alt: "Sweet sticker" },
  { type: "image", src: "/img7.jpg", alt: "Romantic sticker" },
  { type: "image", src: "/img8.jpg", alt: "Cute sticker" },
  { type: "image", src: "/img9.jpg", alt: "Love sticker" },
  { type: "image", src: "/img10.jpg", alt: "Heart sticker" },
  { type: "image", src: "/img11.jpg", alt: "Special sticker" },
  { type: "image", src: "/img12.jpg", alt: "Love sticker" },
  { type: "image", src: "/img13.jpg", alt: "Heart sticker" },
  { type: "image", src: "/img14.jpg", alt: "Kiss sticker" },
  { type: "image", src: "/img15.jpg", alt: "Hug sticker" },
  { type: "image", src: "/img16.jpg", alt: "Sweet sticker" },
  { type: "image", src: "/img17.jpg", alt: "Romantic sticker" },
  { type: "image", src: "/img18.jpg", alt: "Cute sticker" },
]

export default function LoveApp() {
  const [currentSection, setCurrentSection] = useState("home")
  const [selectedStickers, setSelectedStickers] = useState<
    Array<{ type: string; src?: string; content?: string; alt?: string }>
  >([])
  const [loveMessage, setLoveMessage] = useState("")
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingHearts((prev) => [
        ...prev.slice(-10),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: 100,
        },
      ])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const addSticker = (sticker: { type: string; src?: string; content?: string; alt?: string }) => {
    setSelectedStickers((prev) => [...prev, sticker])
  }

  const getRandomLoveNote = () => {
    const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)]
    setLoveMessage(randomNote)
  }

  const renderHome = () => (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center relative px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingHearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute text-pink-300 text-xl sm:text-2xl animate-bounce"
              style={{
                left: `${heart.x}%`,
                top: `${heart.y}%`,
                animation: `float 3s ease-in-out infinite`,
              }}
            >
              <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          ))}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-600 mb-2 font-dancing-script">
          Just for You, My Love❤️‍🩹
        </h2>
        <p className="text-lg sm:text-xl text-pink-400 font-playfair-display">
          A little something to show how much you mean to me
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 px-4">
        <Card
          className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => setCurrentSection("dates")}
        >
          <CardContent className="p-4 sm:p-6 text-center">
            <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-700 mb-2 font-dancing-script">Date Ideas</h3>
            <p className="text-sm sm:text-base text-pink-600 font-inter">Cute adventures for us to share together</p>
          </CardContent>
        </Card>
        <Card
          className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => setCurrentSection("love-notes")}
        >
          <CardContent className="p-4 sm:p-6 text-center">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-purple-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-2 font-dancing-script">Love Notes</h3>
            <p className="text-sm sm:text-base text-purple-600 font-inter">Sweet messages from my heart to yours</p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Love Message */}
      <div className="px-4">
        <Card className="bg-gradient-to-r from-pink-100 via-purple-50 to-blue-50 border-pink-200">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-pink-700 flex items-center gap-2 font-dancing-script text-xl sm:text-2xl">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />A Whisper from My Heart 🫶
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4 sm:p-6 bg-white/50 rounded-lg">
              <p className="text-lg sm:text-xl text-gray-700 mb-4 italic font-playfair-display leading-relaxed">
                {loveMessage || "Tap the button for a little love magic! 💖"}
              </p>
              <Button
                onClick={getRandomLoveNote}
                className="bg-pink-500 hover:bg-pink-600 font-inter text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Click here for a heartwarming surprise! 🧸
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sticker Collection */}
      <div className="px-4">
        <Card className="bg-gradient-to-br from-yellow-50 to-pink-50 border-yellow-200">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-yellow-700 flex items-center gap-2 font-dancing-script text-xl sm:text-2xl">
              <Star className="w-5 h-5 sm:w-6 sm:h-6" />
              Cute Stickers for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {cuteStickers.map((sticker, index) => (
                <button
                  key={index}
                  onClick={() => addSticker(sticker)}
                  className="p-2 sm:p-3 hover:bg-white/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  {sticker.type === "image" ? (
                    <img
                      src={sticker.src || "/placeholder.svg"}
                      alt={sticker.alt}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-23 md:h-23 object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  ) : (
                    <span className="text-3xl sm:text-4xl">{sticker.content ?? ""}</span>
                  )}
                </button>
              ))}
            </div>
            {selectedStickers.length > 0 && (
              <div className="bg-white/50 p-4 sm:p-6 rounded-lg">
                <p className="text-sm sm:text-base text-gray-600 mb-3 font-inter">Your sticker collection:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedStickers.map((sticker, index) => (
                    <span key={index} className="text-xl sm:text-2xl">
                      {sticker.type === "image" ? (
                        <img
                          src={sticker.src || "/placeholder.svg"}
                          alt={sticker.alt}
                          className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl inline-block gap-3 sm:gap-4 mb-4 sm:mb-6"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=40&width=40"
                          }}
                        />
                      ) : (
                        sticker.content
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderDateIdeas = () => (
    <div className="space-y-4 sm:space-y-6 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 font-dancing-script">Date Ideas 🥹</h2>
        <Button
          onClick={() => setCurrentSection("home")}
          variant="outline"
          className="border-pink-300 text-pink-600 font-inter w-full sm:w-auto"
        >
          Back Home
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {dateIdeas.map((idea) => (
          <Card
            key={idea.id}
            className="bg-gradient-to-br from-white to-pink-50 border-pink-200 hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <CardTitle className="text-pink-700 flex items-center gap-2 font-dancing-script text-lg sm:text-xl">
                  <span className="text-xl sm:text-2xl">{idea.icon}</span>
                  {idea.title}
                </CardTitle>
                <Badge className="bg-pink-100 text-pink-700 font-inter text-xs sm:text-sm self-start sm:self-center">
                  {idea.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4 text-sm sm:text-base font-inter leading-relaxed">
                {idea.description}
              </CardDescription>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="border-purple-300 text-purple-600 font-inter text-xs">
                  {idea.time}
                </Badge>
                <Badge variant="outline" className="border-green-300 text-green-600 font-inter text-xs">
                  {idea.cost}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderLoveNotes = () => (
    <div className="space-y-4 sm:space-y-6 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 font-dancing-script">Love Notes 🤍</h2>
        <Button
          onClick={() => setCurrentSection("home")}
          variant="outline"
          className="border-purple-300 text-purple-600 font-inter w-full sm:w-auto"
        >
          Back Home
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {loveNotes.map((note, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl text-purple-700 mb-3 font-dancing-script">
                  A little message just for you
                </h3>
                <div className="flex justify-center mb-4">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
                </div>
                <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed font-playfair-display">
                  {note}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-pink-200">
        <CardContent className="p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-4 font-dancing-script">
            You Are My Everything 🤍
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-playfair-display">
            Every single day with you is a gift. Thank you for being the most amazing, sweet, and pure soul in my life.
            You make everything better just by being you. I love you more than words can express! 🥹
          </p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-3 sm:p-6">
        {/* Navigation */}
        <div className="flex justify-center mb-6 sm:mb-8">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-2 bg-white/50 backdrop-blur-sm rounded-full p-2">
            {/* Soul Script Branding */}
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold font-dancing-script text-lg">
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Soul Script
            </div>
            {/* Navigation Buttons */}
            <Button
              onClick={() => setCurrentSection("home")}
              variant={currentSection === "home" ? "default" : "ghost"}
              className={`font-inter ${currentSection === "home" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-white/50"}`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button
              onClick={() => setCurrentSection("dates")}
              variant={currentSection === "dates" ? "default" : "ghost"}
              className={`font-inter ${currentSection === "dates" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-white/50"}`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Dates
            </Button>
            <Button
              onClick={() => setCurrentSection("love-notes")}
              variant={currentSection === "love-notes" ? "default" : "ghost"}
              className={`font-inter ${currentSection === "love-notes" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-white/50"}`}
            >
              <Gift className="w-4 h-4 mr-2" />
              Love Notes
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden w-full">
            <div className="flex items-center justify-between bg-white/50 backdrop-blur-sm rounded-full p-2">
              <div className="flex items-center px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold font-dancing-script text-sm">
                <Heart className="w-4 h-4 mr-1 fill-current" />
                Soul Script
              </div>
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                variant="ghost"
                size="sm"
                className="hover:bg-white/50"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="mt-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 space-y-1">
                <Button
                  onClick={() => {
                    setCurrentSection("home")
                    setMobileMenuOpen(false)
                  }}
                  variant={currentSection === "home" ? "default" : "ghost"}
                  className={`w-full justify-start font-inter ${currentSection === "home" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-white/50"}`}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Home
                </Button>
                <Button
                  onClick={() => {
                    setCurrentSection("dates")
                    setMobileMenuOpen(false)
                  }}
                  variant={currentSection === "dates" ? "default" : "ghost"}
                  className={`w-full justify-start font-inter ${currentSection === "dates" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-white/50"}`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Dates
                </Button>
                <Button
                  onClick={() => {
                    setCurrentSection("love-notes")
                    setMobileMenuOpen(false)
                  }}
                  variant={currentSection === "love-notes" ? "default" : "ghost"}
                  className={`w-full justify-start font-inter ${currentSection === "love-notes" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-white/50"}`}
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Love Notes
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        {currentSection === "home" && renderHome()}
        {currentSection === "dates" && renderDateIdeas()}
        {currentSection === "love-notes" && renderLoveNotes()}
      </div>
    </div>
  )
}
