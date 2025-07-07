"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, Gift, Star, Sparkles } from "lucide-react"

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

type CuteSticker = { type: string; src?: string; alt?: string; content?: string };

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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingHearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute text-pink-300 text-2xl animate-bounce"
              style={{
                left: `${heart.x}%`,
                top: `${heart.y}%`,
                animation: `float 3s ease-in-out infinite`,
              }}
            >
              💕
            </div>
          ))}
        </div>
        <h2 className="text-5xl font-bold text-pink-600 mb-2 font-script">Just for You, Lovebug🐞 </h2>
        <p className="text-xl text-pink-400 font-serif">A little something to show how much you mean to me</p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card
          className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => setCurrentSection("dates")}
        >
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-pink-700 mb-2 font-script">Date Ideas</h3>
            <p className="text-pink-600 font-sans">Cute adventures for us to share together</p>
          </CardContent>
        </Card>

        <Card
          className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => setCurrentSection("love-notes")}
        >
          <CardContent className="p-6 text-center">
            <Heart className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-purple-700 mb-2 font-script">Love Notes</h3>
            <p className="text-purple-600 font-sans">Sweet messages from my heart to yours</p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Love Message */}
      <Card className="bg-gradient-to-r from-pink-100 via-purple-50 to-blue-50 border-pink-200">
        <CardHeader>
<CardTitle className="text-pink-700 flex items-center gap-2 font-script text-2xl">
  <Heart className="w-6 h-6" />
             A Whisper from My Heart 🫶
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center p-6 bg-white/50 rounded-lg">
            <p className="text-xl text-gray-700 mb-4 italic font-serif leading-relaxed">
              {loveMessage || "Tap the button for a little love magic! 💖"}
            </p>
            <Button onClick={getRandomLoveNote} className="bg-pink-500 hover:bg-pink-600 font-sans text-lg px-6 py-3">
              <Heart className="w-5 h-5 mr-2" />
              Click here for a heartwarming surprise! 🧸
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sticker Collection */}
      <Card className="bg-gradient-to-br from-yellow-50 to-pink-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-700 flex items-center gap-2 font-script text-2xl">
            <Star className="w-6 h-6" />
            Cute Stickers for You
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-5 mb-6">
            {cuteStickers.map((sticker, index) => (
              <button
                key={index}
                onClick={() => addSticker(sticker)}
                className="p-3 hover:bg-white/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                {sticker.type === "image" ? (
                  <img
                    src={sticker.src || "/placeholder.svg"}
                    alt={sticker.alt}
                    className="w-23 h-23 object-contain rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=64&width=64"
                    }}
                  />
                ) : (
                  <span className="text-4xl">{sticker.content ?? ""}</span>
                )}
              </button>
            ))}
          </div>
          {selectedStickers.length > 0 && (
            <div className="bg-white/50 p-6 rounded-lg">
              <p className="text-l text-gray-600 mb-3 font-sans">Your sticker collection:</p>
              <div className="flex flex-wrap gap-2">
                {selectedStickers.map((sticker, index) => (
                  <span key={index} className="text-2xl">
                    {sticker.type === "image" ? (
                      <img
                        src={sticker.src || "/placeholder.svg"}
                        alt={sticker.alt}
                        className="w-10 h-10 object-contain rounded inline-block"
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
  )

  const renderDateIdeas = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-pink-500 font-script">Date Ideas 🥹</h2>
        <Button
          onClick={() => setCurrentSection("home")}
          variant="outline"
          className="border-pink-300 text-pink-600 font-sans"
        >
          Back Home
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {dateIdeas.map((idea) => (
          <Card
            key={idea.id}
            className="bg-gradient-to-br from-white to-pink-50 border-pink-200 hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-pink-700 flex items-center gap-2 font-script text-xl">
                  <span className="text-2xl">{idea.icon}</span>
                  {idea.title}
                </CardTitle>
                <Badge className="bg-pink-100 text-pink-700 font-sans">{idea.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4 text-base font-sans leading-relaxed">
                {idea.description}
              </CardDescription>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="border-purple-300 text-purple-600 font-sans">
                  {idea.time}
                </Badge>
                <Badge variant="outline" className="border-green-300 text-green-600 font-sans">
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-purple-400 font-script">Love Notes 🤍</h2>
        <Button
          onClick={() => setCurrentSection("home")}
          variant="outline"
          className="border-purple-300 text-purple-600 font-sans"
        >
          Back Home
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {loveNotes.map((note, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-2xl font-sans text-purple-700 mb-2 font-script">A little message just for you </h3>
              
                <div className="flex justify-start mb-4">
                  <Heart className="w-8 h-8 text-pink-500" />
                 
                <p className="text-lg text-gray-700 italic leading-relaxed font-serif">{note}</p>
              </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-pink-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-3xl font-bold text-pink-700 mb-4 font-script">You Are My Everything 🤍</h3>
          <p className="text-xl text-gray-700 leading-relaxed font-serif">
            Every single day with you is a gift. Thank you for being the most amazing, sweet, and pure soul in my life.
            You make everything better just by being you. I love you more than words can express! 🥹
          </p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-white/50 backdrop-blur-sm rounded-full p-2">
            {/* Soul Script Branding */}
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold font-script text-lg">
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Soul Script
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={() => setCurrentSection("home")}
              variant={currentSection === "home" ? "default" : "ghost"}
              className={`font-sans ${currentSection === "home" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-white/50"}`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button
              onClick={() => setCurrentSection("dates")}
              variant={currentSection === "dates" ? "default" : "ghost"}
              className={`font-sans ${currentSection === "dates" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-white/50"}`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Dates
            </Button>
            <Button
              onClick={() => setCurrentSection("love-notes")}
              variant={currentSection === "love-notes" ? "default" : "ghost"}
              className={`font-sans ${currentSection === "love-notes" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-white/50"}`}
            >
              <Gift className="w-4 h-4 mr-2" />
              Love Notes
            </Button>
          </div>
        </div>

        {/* Content */}
        {currentSection === "home" && renderHome()}
        {currentSection === "dates" && renderDateIdeas()}
        {currentSection === "love-notes" && renderLoveNotes()}
      </div>

      {/* Custom Fonts and Floating Animation Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-script {
          font-family: 'Dancing Script', cursive;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
          100% { transform: translateY(-40px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
