import Shelve from "./Shelve.js";
import Shelve2 from "./Shelve2.js";
import "./assets.css";

export default function Shelves(){
    return (
        <div class="shelves_container">

          <div id="text">
            <p id="intro">"Enter the diggin portal .... " 
            <p>your gateway to the parallel version of our physical record store. <br/>Updated in real-time with the best collections we get our hands on and curated for the very finest of diggers.</p></p>
            
            <p id="intro_mobile">"shorter intro for mobile" </p>
            <button class="distro"><p>Our distribution (for record shops)</p></button>
          </div>
          <div class="shelve_presentation">

          <div class="shelf_banner">

          
            <div class="name_display" id="SPENNY_display"></div>
            <div class="name_display" id="ABSTRACT_display"></div>
            <div class="name_display" id="ACID_JAZZ_display"></div>

            <div class="name_display" id="ACID_TECHNO_display"></div>
            <div class="name_display" id="ACID_display"></div>
            <div class="name_display" id="AFROBEAT_display"></div>
            <div class="name_display" id="AMBIENT_display"></div>
            <div class="name_display" id="BASS_MUSIC_display"></div>
            <div class="name_display" id="BERLIN_SCHOOL_display"></div>
            <div class="name_display" id="BIG_BEAT_display"></div>
            <div class="name_display" id="BINS_display"></div>
            <div class="name_display" id="BLUES_display"></div>
            <div class="name_display" id="BOOGIE_display"></div>
            <div class="name_display" id="BOSSA_NOVA_display"></div>
            <div class="name_display" id="BREAKCORE_display"></div>
            <div class="name_display" id="BREAKS_display"></div>
            <div class="name_display" id="BROKEN_BEAT_display"></div>
            <div class="name_display" id="CHILLOUT_LOUGNE_display"></div>
            <div class="name_display" id="CHILLWAVE_display"></div>
            <div class="name_display" id="CLASSICAL_display"></div>
            <div class="name_display" id="DARKWAVE_display"></div>
            

            <div class="name_display" id="DEEP_HOUSE_90S_display"></div>
            <div class="name_display" id="DEEP_HOUSE_2000S_display"></div>
            <div class="name_display" id="DEEP_HOUSE_2011S_display"></div>
            <div class="name_display" id="DEEP_TECH_HOUSE_display"></div>
            <div class="name_display" id="DEEP_TECHNO_display"></div>
            <div class="name_display" id="DISCO_70S_display"></div>
            <div class="name_display" id="DISCO_HOUSE_display"></div>
            <div class="name_display" id="DISCO_display"></div>
            <div class="name_display" id="DOWNTEMPO_display"></div>
            <div class="name_display" id="DRONE_display"></div>
            <div class="name_display" id="DRUM_N_BASS_display"></div>
            <div class="name_display" id="DUB_TECHNO_display"></div>
            <div class="name_display" id="DUB_display"></div>
            <div class="name_display" id="DUBSTEP_display"></div>
            <div class="name_display" id="EBM_display"></div>
            <div class="name_display" id="ELECTRO_80S_display"></div>
            <div class="name_display" id="ELECTRO_DISCO_display"></div>
            <div class="name_display" id="ELECTRO_HOUSE_display"></div>
            <div class="name_display" id="ELECTRO_POP_display"></div>
            <div class="name_display" id="ELECTRO_TECHNO_display"></div>
            <div class="name_display" id="ELECTRO_display"></div>
            <div class="name_display" id="ELECTROCLASH_display"></div>
            <div class="name_display" id="EURO_HOUSE_display"></div>
            <div class="name_display" id="EXPERIMENTAL_display"></div>
            <div class="name_display" id="FILTER_HOUSE_display"></div>
            <div class="name_display" id="FOLK_display"></div>
            <div class="name_display" id="FREESTYLE_display"></div>
            <div class="name_display" id="FREETEKNO_display"></div>

            <div class="name_display" id="FUCK_KNOWS_display"></div>
            <div class="name_display" id="FUNK_N_SOUL_display"></div>
            <div class="name_display" id="FUNKY_HOUSE_display"></div>
            <div class="name_display" id="GARAGE_HOUSE_display"></div>
            <div class="name_display" id="GERMAN_TECHNO_display"></div>
            <div class="name_display" id="GHETTOTECH_display"></div>
            <div class="name_display" id="GOA_TRANCE_display"></div>
            <div class="name_display" id="GUILTY_PLEASURES_display"></div>

            <div class="name_display" id="HARD_HOUSE_display"></div>
            <div class="name_display" id="HARD_TECHNO_display"></div>
            <div class="name_display" id="HARD_TRANCE_display"></div>
            <div class="name_display" id="HARDCORE_display"></div>
            <div class="name_display" id="HARDSTYLE_display"></div>
            <div class="name_display" id="HI-NRG_display"></div>
            <div class="name_display" id="HIP_HOP_display"></div>
            <div class="name_display" id="HIP_HOUSE_display"></div>
            <div class="name_display" id="HOUSE_80S_display"></div>
            <div class="name_display" id="HOUSE_2000S_display"></div>
            <div class="name_display" id="HOUSE_2011S_display"></div>
            <div class="name_display" id="HOUSE_UK_90S_display"></div>
            <div class="name_display" id="HOUSE_US_90S_display"></div>
            <div class="name_display" id="HOUSE_WORLD_display"></div>
            <div class="name_display" id="IDM_display"></div>
            <div class="name_display" id="INDIE_ROCK_display"></div>


            <div class="name_display" id="INDUSTRIAL_display"></div>
            <div class="name_display" id="ITALO_HOUSE_display"></div>
            <div class="name_display" id="JAZZ_FUNK_display"></div>
            <div class="name_display" id="JAZZ_display"></div>
            <div class="name_display" id="JAZZY_HOUSE_display"></div>
            <div class="name_display" id="JUNGLE_display"></div>
            <div class="name_display" id="LATIN_HOUSE_display"></div>
            <div class="name_display" id="LEFTFIELD_display"></div>
            <div class="name_display" id="MELODIC_TECHNO_display"></div>
            <div class="name_display" id="METAL_display"></div>
            <div class="name_display" id="MINIMAL-DEEPHOUSE_display"></div>
            <div class="name_display" id="MINIMAL-HOUSE_display"></div>
            <div class="name_display" id="MINIMAL-TECHHOUSE_display"></div>
            <div class="name_display" id="MINIMAL-TECHNO_display"></div>
            <div class="name_display" id="MINIMAL_display"></div>
            <div class="name_display" id="MUSIQUE_CONCRETE_display"></div>

            <div class="name_display" id="NEW_AGE_display"></div>
            <div class="name_display" id="NEW_BEAT_display"></div>
            <div class="name_display" id="NEW_RELEASES_display"></div>
            <div class="name_display" id="NOISE_display"></div>
            <div class="name_display" id="NU_DISCO_display"></div>
            <div class="name_display" id="OUR_LABELS_display"></div>

            <div class="name_display" id="POP_display"></div>
            <div class="name_display" id="PROGRESSIVE_HOUSE_display"></div>
            <div class="name_display" id="PROGRESSIVE_TECHNO_display"></div>
            <div class="name_display" id="PROGRESSIVE_TRANCE_display"></div>
            <div class="name_display" id="PUNK_display"></div>
            <div class="name_display" id="RAVE_display"></div>
            <div class="name_display" id="REGGAE_display"></div>
            <div class="name_display" id="RNB_display"></div>

            <div class="name_display" id="ROCK_display"></div>
            <div class="name_display" id="ROMINIMAL_display"></div>
            <div class="name_display" id="SOULFUL_HOUSE_display"></div>
            <div class="name_display" id="SOUNDTRACK_display"></div>
            <div class="name_display" id="SPOKEN_WORD_display"></div>
            <div class="name_display" id="STAFF_PICKS_display"></div>
            

            <div class="name_display" id="SYNTH_POP_display"></div>
            <div class="name_display" id="TECH_HOUSE_display"></div>
            <div class="name_display" id="TECHNO_UK_display"></div>
            <div class="name_display" id="TECHNO_US_display"></div>
            <div class="name_display" id="TECHNO_WORLD_display"></div>
            <div class="name_display" id="TRANCE_display"></div>

            <div class="name_display" id="TRIBAL_HOUSE_display"></div>
            <div class="name_display" id="TRIBAL_TECHNO_display"></div>
            <div class="name_display" id="TRIP_HOP_display"></div>
            <div class="name_display" id="TROUSE_display"></div>
            <div class="name_display" id="UKG_display"></div>
            <div class="name_display" id="VAPOUR_WAVE_display"></div>

            <div class="name_display" id="VOCAL_HOUSE_display"></div>
            <div class="name_display" id="WORLD_display"></div>
            
            
            </div>
            
          
            <div class="description">
            
            
            <div class="name_display" id="SPENNY_display"></div>
            <div class="name_display" id="ABSTRACT_display">
            Abstract music is all about breaking the rules! It ignores traditional melodies and structures, focusing on sound, texture, and emotion. Think of it as music that’s more about feeling and atmosphere than familiar tunes— ideal for letting your imagination run wild.

            </div>
            <div class="name_display" id="ACID_JAZZ_display">
            Acid jazz combines jazz, funk, hip-hop, and electronic music and often has a bit of energy behind it rather than chill vibes. It blends traditional jazz improvisation with newer sounding rhythms and grooves, offering a fresh, experimental take on both genres.

            </div>

            <div class="name_display" id="ACID_TECHNO_display">
            Acid Techno is a subgenre of techno that blends driving beats with the distinctive squelching sounds of the Roland TB-303 synthesizer. It’s intense, hypnotic, and often features repetitive, acid-tinged basslines, creating a raw, immersive atmosphere on the dancefloor.

            </div>
            <div class="name_display" id="ACID_display">
            Acid is a genre that uses the iconic, squelchy sounds of the Roland TB-303 synthesizer to create a trippy, repetitive vibe. It's experimental, with looping basslines and sharp, distorted melodies that give it a raw, psychedelic edge.

            </div>
            <div class="name_display" id="AFROBEAT_display">
            Afrobeat blends traditional African rhythms with jazz, funk, and highlife. It’s driven by complex, syncopated drumming, catchy grooves, and vibrant horns, creating an energetic, danceable sound that’s deeply rooted in African culture.

            </div>


            <div class="name_display" id="AMBIENT_display">
            Ambient music focuses on atmosphere and mood rather than traditional melodies or rhythms. It’s often soothing and immersive, using layers of sound to create a tranquil, introspective environment—perfect for background listening or relaxation.
            </div>

            <div class="name_display" id="BASS_MUSIC_display">
            Bass music is all about heavy, deep basslines and energetic rhythms. It combines elements from genres like dubstep, drum and bass, and trap, focusing on intense drops and powerful low-end sounds that drive the energy of the track.

            </div>

            <div class="name_display" id="BERLIN_SCHOOL_display">
            Berlin-School is a style of electronic music known for its hypnotic, sequenced rhythms and rich, atmospheric soundscapes. It blends synthesizers, evolving patterns, and spacey melodies, creating a trance-like vibe that draws on early ’70s experimental and Krautrock influences.
            </div>
            <div class="name_display" id="BIG_BEAT_display">
            Big Beat blends funky beats, rock, and electronic music, often featuring big, catchy breaks and samples. It’s high-energy, with a raw, rebellious edge—perfect for driving rhythms and a dancefloor vibe. 

            </div>
            
            <div class="name_display" id="BLUES_display">
            Blues is a genre rooted in soulful melodies and expressive guitar riffs. It often features emotional lyrics, with themes of struggle, heartache, and resilience, all set to a simple, yet powerful, chord progression that’s easy to feel and hard to forget.

            </div>
            <div class="name_display" id="BOOGIE_display">
            Boogie is an upbeat, danceable style of rhythm and blues and a hint of disco, with a catchy, swinging beat and infectious grooves. It can be fast-paced, often featuring piano riffs and energetic basslines.


            </div>
            <div class="name_display" id="BOSSA_NOVA_display">
            Bossa Nova is a smooth blend of samba and jazz, with soft vocals and gentle guitar rhythms. It’s laid-back and melodic, creating a relaxed, elegant vibe that’s perfect for easy listening or a chill atmosphere.

            </div>
            <div class="name_display" id="BREAKCORE_display">
            
A fast-paced, chaotic genre that blends intense drum breaks, glitchy beats, and heavy distortion. It’s known for its unpredictable structure, blending elements of punk, jungle, and industrial with experimental electronic sounds for an aggressive, wtf is going on kind of experience. Think end of the world kind of vibes.

            </div>

            <div class="name_display" id="BREAKS_display">
           
We pride ourselves on our Breaks section, which is loaded with everything from the naughty stuff with stripped back percussion and fat saw tooth baselines, to the smoother stuff that nods it’s head to those old-school funky numbers.

            </div>


            <div class="name_display" id="BROKEN_BEAT_display">
            
We’re talking funky, experimental beats that twist and turn, blending jazz, funk, and electronic in a way that’s unpredictable but always seems to make sense.

            </div>


            <div class="name_display" id="CHILLOUT_LOUGNE_display">
           
The go-to for laid-back vibes and smooth, atmospheric sounds. It’s the perfect blend of elements with some lovely mellow beats that create the ideal backdrop for unwinding or setting the mood. Just good classy background stuff to relax to.

            </div>
            <div class="name_display" id="CHILLWAVE_display">
            
A dreamy section right here full of retro vibes and hazy beats. It’s all about lush synths, soft vocals, and smooth rhythms for chilling out.

            </div>
            <div class="name_display" id="CLASSICAL_display">
            Well hello there sir! We’ll be very surprised if we have any classical aficionado’s passing through, but there’s a place for everyone in our shop, and to be fair, our Classical section is a sublime triumph of compositions.


            </div>
            <div class="name_display" id="DARKWAVE_display">
            Haunting synths, dark, moody vibes, and vocals. Think post-punk meets electronic, with a gothic edge. For those that like to get lost in something atmospheric, introspective, and a little bit mysterious.


            </div>
            

            <div class="name_display" id="DEEP_HOUSE_90S_display">
            Ahh the golden era/section, full of warm, raw, soulful grooves, smooth basslines, and soulful samples. Compared to newer Deep House in the 2000’s, which often leans more towards slick, polished production and techy elements, 90s deep house keeps it gritty, more organic, with a deeper sense of emotion and vibe that still hits today, and we think always will! 

            </div>

            <div class="name_display" id="DEEP_HOUSE_2000S_display">
            If you’re into deep, groove-driven house with a bit of evolution, this section is pure gold. Take the deep gems from the 90’s and polish it up with a more refined, techy sound, while still keeping those warm basslines and smooth grooves. 

            </div>
            <div class="name_display" id="DEEP_HOUSE_2011S_display">
            We are extra careful of our curation of this jam packed section and try to handpick tracks that stay timeless and true to the roots of deep house. Think lush synths, deep basslines, and hypnotic rhythms, each tune chosen for its quality. No fillers, just pure, top-tier new deep house from producers far and wide.
            </div>
            <div class="name_display" id="DEEP_TECH_HOUSE_display">
            A genre we’ve coined that fuses the groove of deep house with the drive of tech house. 

            </div>
            <div class="name_display" id="DEEP_TECHNO_display">
            The warmer side of techno—retaining the essence of its roots but with a deeper, more immersive feel.
            </div>
            <div class="name_display" id="DISCO_70S_display">
            Energy, nostalgia, and funky basslines! We often come across great disco finds when snapping up collections, and we make sure to keep this section tight, showcasing only what we think is the best of the genre.
            </div>
            <div class="name_display" id="DISCO_HOUSE_display">
            Fusing the smooth, soulful energy of disco with the steady pulse of house. Nostalgic funked up bangers for the dance floor.

            </div>
            <div class="name_display" id="DISCO_display">
            The more recent Disco releases with stock pulls from the raw, organic side of the genre—deep grooves, smooth basslines, and a modern touch that keeps things fresh and soulful without the fluff.

            </div>
            <div class="name_display" id="DOWNTEMPO_display">
            
            </div>

            <div class="name_display" id="DRONE_display">
            Drone Music creates immersive soundscapes, with subtle shifts that pull you into a deep, hypnotic experience.

            </div>
            <div class="name_display" id="DRUM_N_BASS_display">
            Ah the drums! Emerging in the early ‘90s from the UK rave scene, following in the footsteps of its wild uncle Jungle, it quickly become a major movement  in electronic music. While the genre exploded with fast breaks and heavy basslines, we focus on the more stripped-back side, selecting the ones that are less busy but still capture the raw, driving energy of DNB.
            </div>
            <div class="name_display" id="DUB_TECHNO_display">
            Dub Techno combines the steady pulse of techno with the spacious, textured atmosphere of dub. Originating in the ‘90s, it has grown into a widely appreciated genre today, with modern productions focusing on subtle subby basslines amoughst the techno flavours. 

            </div>
            <div class="name_display" id="DUB_display">
            Deep bass, reverb, and echoing effects that make everything feel big. Strip things back and let it breathe we say!

            </div>
            <div class="name_display" id="DUBSTEP_display">
            Wobbly beats and heavy drops! Evolving from dub, garage, and grime, it’s known for heavy basslines and half-time beats around 140 BPM. It quickly became a defining sound of underground electronic music in the 2000’s. Wob wob wob

            </div>
            <div class="name_display" id="EBM_display">
            Emerging in the ‘80s, EBM was a hard-hitting, hypnotic force of industrial rhythms and vocals, forged for the dancefloor. Modern releases stay true to that raw energy, now with an infusion of contemporary electronic sounds. (Electronic Body Music)

            </div>
            <div class="name_display" id="ELECTRO_80S_display">
            Emerging in the early ‘80s, Electro fused robotic rhythms, funky basslines, and synthetic melodies, blending hip-hop and electronic music. With its futuristic sound and strong ties to breakdancing, it defined a cultural moment, shaping the dance scene and influencing the sound of early hip-hop and techno. An early electro tune played right can be the tune of the night.

            </div>
            <div class="name_display" id="ELECTRO_DISCO_display">
            A new section we made that we think captures the best of both worlds—combining the sexy funk and groove of disco with electro’s futuristic edge, creating a sound that’s both nostalgic and ahead of its time. 
            </div>
            <div class="name_display" id="ELECTRO_HOUSE_display">
            Our Electro House section is curated with care, steering clear of cliché, over-produced releases and focusing on the classier side of the fence. We handpick tracks that blend the punchy, bass-driven energy of electro with the steady, uplifting rhythms of house. It's become a fun first stop spot for our regular diggers.

            </div>
            <div class="name_display" id="ELECTRO_POP_display">
            Our Electro Pop section blends catchy pop melodies with sharp, synthetic electro sounds. We focus on tracks that balance that upbeat vibe without so much of the cheese.

            </div>
            <div class="name_display" id="ELECTRO_TECHNO_display">
            Dance floor ready bombs that combine the driving beats of techno with the sharp, electrifying sounds of electro. 
            </div>
            <div class="name_display" id="ELECTRO_display">
            Squelchy beats with gritty, electronic textures. Our Electro can be a melting pot of genres, from more breaky numbers and stripped back party starters, to peak time 4x4 in your face whoppers.

            </div>
            <div class="name_display" id="ELECTROCLASH_display">
            Gritty basslines, glitchy synths, and distorted vocals with the rebellious edge of punk and without the overplayed cliches! Electro Pop’s evil sister.
            </div>
            <div class="name_display" id="EURO_HOUSE_display">
            He who dares wins
            </div>
            <div class="name_display" id="EXPERIMENTAL_display">
            Explore the unknown, where odd sounds collide in the strangest ways.

            </div>
            <div class="name_display" id="FILTER_HOUSE_display">
            Where’s bob when you need him?

            </div>
            <div class="name_display" id="FOLK_display">
            Our Folk section is packed with timeless acoustic sounds, from rich storytelling to stripped-back melodies.
            </div>
            <div class="name_display" id="FREESTYLE_display">
            Bringing that 80s/90s vibe with its blend of electro, exotic rhythms, and the occasional heartfelt vocal. Known for its catchy hooks and upbeat energy.
            </div>
            <div class="name_display" id="FREETEKNO_display">
            High-energy, free-spirited techno for the dancefloor, minus the commercial gloss. Our Freetekno section captures the raw, underground spirit of the European rave scene. With fast-paced rhythms, relentless basslines, and an anything-goes attitude.
            </div>

            <div class="name_display" id="FUCK_KNOWS_display">
            “What section can we put this tune?” - “Fuck knows!”

            </div>
            <div class="name_display" id="FUNK_N_SOUL_display">
            A treasure trove of those timeless classics and hidden gems where the groove never dies.

            </div>
            <div class="name_display" id="FUNKY_HOUSE_display">
            What started out as a section to keep the House shelves extra refined, has now turned into a fan favourite fun loving home for the funky stuff. Full of feel-good vibes, it’s the perfect blend of upbeat house and disco influences. From classic tracks to modern hits, it’s a go-to for those who want to add a little extra funk to their house collection.

            </div>
            <div class="name_display" id="GARAGE_HOUSE_display">
            Legend has it that a master DJ in NYC, during his legendary residency at the Paradise Garage, helped shape one of House music's defining genres. Soulful, swinging rhythms, smooth vocals, and shuffling beats—this is Garage House, blending the essence of classic '90s Deep House with the unmistakable groove of garage.

            </div>
            <div class="name_display" id="GERMAN_TECHNO_display">
            Precision, deep basslines, and hypnotic rhythms—because when Germans do techno, they do it right. With a focus on minimalism and that iconic Berlin vibe, it’s techno that’s as meticulous as it is mind-bending.
            </div>
            <div class="name_display" id="GHETTOTECH_display">
            The naughty lovechild of Detroit techno and Chicago’s wildest nights. With sped-up beats, filthy basslines, and samples that feel like they were pulled from a late-night rave 2 bags down, it’s all about fast, dirty, and downright unhinged energy.

            </div>
            <div class="name_display" id="GOA_TRANCE_display">
            When it’s done right, Goa Trance opens a portal to a place where time dissolves and beats phase between dimensions. The fast, hypnotic rhythms and cosmic melodies have been known to shift minds into states of consciousness so profound, they could rival a decade spent in an Indian yoga retreat.

            </div>
            <div class="name_display" id="GUILTY_PLEASURES_display">
            Filled with records that make you smile, even if they’re a little cheesy. Whether it’s the nostalgia or just a love for the over-the-top, when skilfully dropped at the right moment, a guilty pleasure can be the secret weapon that turns the dancefloor into something magical.

            </div>

            <div class="name_display" id="HARD_HOUSE_display">
            No-holds-barred beats with pounding basslines, relentless kicks, and a bit of that rave-era attitude, it’s perfect for those who want to turn the intensity up to 11. It’s in-your-face, fast, and unapologetic—just the way some nutters like it.
            </div>
            <div class="name_display" id="HARD_TECHNO_display">
            Now this is a section for those who crave fast, heavy beats and relentless energy. With powerful kicks, industrial undertones, and an unfiltered intensity, it’s high-octane and unapologetically raw—perfect for those who like their techno… hard!

            </div>
            <div class="name_display" id="HARD_TRANCE_display">
            It’s Trance, but cranked up a notch! You still get the driving beats and melodic intensity, but with turbo-charged basslines, soaring synths, and high-energy rhythms that never let up.

            </div>
            <div class="name_display" id="HARDCORE_display">
            To all the mentalists out there, fill your boots.

            </div>
            <div class="name_display" id="HARDSTYLE_display">
            It’s a wild mix of hardcore and trance with beats that hit harder than a 90’s Dutch Gary.

            </div>
            <div class="name_display" id="HI-NRG_display">
            Disco’s electrified cousin—fast beats, funky basslines, and pure dancefloor energy. 

            </div>
            <div class="name_display" id="HIP_HOP_display">
            Beats dripping with attitude— we like to keep this section loaded with tasty instrumentals to vibe to!

            </div>
            <div class="name_display" id="HIP_HOUSE_display">
            It’s got raps over funky beats, combining the punch of Hip Hop with the groove of house music.

            </div>
            <div class="name_display" id="HOUSE_80S_display">
            The birth of a monster! We’re all about 80’s House for its raw, stripped-back sound that’s focused on groove and simplicity. With a "live" feel powered by analog gear, it stands apart from the 90’s House scene, while giving a nod to its soulful, Disco-driven roots—honoring the musical legacy that birthed it.

            </div>
            <div class="name_display" id="HOUSE_2000S_display">
            The rise of a new era! Sleek, punchy basslines and polished production, as many producers swapped analog for digital gear. With software and computers at the helm, the sound got cleaner, sharper, and more refined—while still staying true to its classic roots.

            </div>
            <div class="name_display" id="HOUSE_2011S_display">
            The abundance of fresh House releases that keep us guessing about when they were made is a beautiful thing. House music still going strong!

            </div>
            <div class="name_display" id="HOUSE_UK_90S_display">
            The 90s is where House went prime time. While the US laid the foundation, the UK brought a raw, experimental twist, fueled by rave culture. We take pride in curating only the finest for our House section—packed with the tracks that define the sound and ditching the filler that comes with such a massive genre.

            </div>
            <div class="name_display" id="HOUSE_US_90S_display">
            Rooted in Chicago but spreading like wildfire, the smooth sound of US House evolved with soulful grooves, deep bass, and uplifting energy. This section captures everything we love about a genre that created one of the biggest musical movements in dance music history.

            </div>
            <div class="name_display" id="HOUSE_WORLD_display">
            90s House from every corner of the globe! It's easily the biggest section in the shop, which means it's full of gems waiting to be discovered.

            </div>
            <div class="name_display" id="IDM_display">
            (Intelligent Dance Music) is for when you want your beats to be weird, complex, and mind-bending, filled with glitchy, experimental sounds that challenge the norm and push the boundaries of electronic music.
            </div>
            <div class="name_display" id="INDIE_ROCK_display">
            Yeah, we also sell indie rock here.

            </div>


            <div class="name_display" id="INDUSTRIAL_display">
            Raw, dark, and intense pounding beats with distorted sounds, and harsh textures. Anger issues anyone?
            </div>
            <div class="name_display" id="ITALO_HOUSE_display">
            A perfect Italian sunny day for your ears.

            </div>
            <div class="name_display" id="JAZZ_FUNK_display">
            Funked up Jazz?
            </div>
            <div class="name_display" id="JAZZ_display">
            Needs no intro really! If you are here it, we appreciate you.

            </div>
            <div class="name_display" id="JAZZY_HOUSE_display">
            If you like House and you like Jazz, you love Jazzy house!

            </div>
            <div class="name_display" id="JUNGLE_display">
            We’ve got the Tarzan and Jane of Jungle swinging through the racks, ma guy. Straight out of the UK rave scene, Jungle is Drum and Bass’s wild uncle—raw, chaotic, and packed with fast breakbeats, heavy basslines, and the rebellious vibes of reggae, dub, and hip-hop. It’s organic and unruly, setting the stage for the more polished Drum and Bass sound that came later.

            </div>
            <div class="name_display" id="LATIN_HOUSE_display">

            </div>
            <div class="name_display" id="LEFTFIELD_display">
            Unconventional and experimental, Leftfield fuses techno, house, and dub to craft deep, hypnotic beats that push boundaries.

            </div>
            <div class="name_display" id="MELODIC_TECHNO_display">
            An emotional section full of thick, driving techno rhythms with melodic tendencies. Ideal for diggers who want to get real immersive while keeping it chuggy!

            </div>
            <div class="name_display" id="METAL_display">
            Funny enough, we randomly landed a huge collection of mint condition metal records. Not really our vibe, but metalheads are losing it over this one. Thrash away!

            </div>
            <div class="name_display" id="MINIMAL-DEEPHOUSE_display">
            Less is more but with a little bit more deepness

            </div>
            <div class="name_display" id="MINIMAL-HOUSE_display">
            Less is more but with a little bit more house 
            </div>
            <div class="name_display" id="MINIMAL-TECHHOUSE_display">
            Less is more but with a little bit more tech
            </div>
            <div class="name_display" id="MINIMAL-TECHNO_display">
            Techno stripped to the waist

            </div>
            <div class="name_display" id="MINIMAL_display">
            Less is more

            </div>
            <div class="name_display" id="MUSIQUE_CONCRETE_display">
            Born in the ‘40s, Musique Concrète turns everyday noises—like street sounds and found recordings—into experimental soundscapes. It’s raw, unpredictable, and for anyone who wants to hear music in the most unconventional way.

            </div>

            <div class="name_display" id="NEW_AGE_display">
            Ahhh, New Age—it’s like a sonical day spa for your soul. Born in the ‘70s, it blends soothing synths, nature sounds, and peaceful vibes to transport you to a higher state of consciousness. Perfect for chilling out, meditating, or just vibing with the universe.
            </div>
            <div class="name_display" id="NEW_BEAT_display">
            Born in the late ‘80s, New Beat fuses industrial, disco, and electronic with retro vocal samples and quirky sound effects. It walks a fine line between trippy and over-the-top, but when done right, it’s a raw, bass-heavy dancefloor force—hypnotic and full of energy. No wonder it’s making waves again today.
            </div>
            <div class="name_display" id="NEW_RELEASES_display">
            Finally we can have one place that stays up to date with our favourite new releases cherry picked from around the world. Just like with our second-hand, we’re picky about what we bring in, selected the latest and greatest. Have to mention our in house labels.

            </div>
            <div class="name_display" id="NOISE_display">
            On one hand, Noise is hard to describe, but on the other, it’s really not—it’s just Noise. Think wild frequency experiments that might send you into a trance or leave you questioning why someone bothered to press it onto vinyl. If I didn’t run a record store packed with rare, mint-condition Noise records, I’d probably be wondering who’s buying this stuff. But hey, that’s the beauty of it—Noise isn’t for everyone, but for those who get it, it’s a whole world of raw, untamed sound.

            </div>
            <div class="name_display" id="NU_DISCO_display">
            A genre that’s easy to love and tough to pin down. It mixes classic disco grooves with a modern update— loaded with funked up basslines, smooth synths, and fun dancefloor hooks. It has that retro feel, but stays fresh with crisp production
            </div>
            <div class="name_display" id="OUR_LABELS_display">
            Here we proudly present our home made labels.
            </div>

            <div class="name_display" id="POP_display">
            Pop today is a shadow of what it used to be—formulaic, trend-chasing, and dictated by Spotify algorithms instead of real artistry, with only the rare exception breaking through. Meanwhile, true talent often gets stuck in the grind of self-promotion. That’s why we focus on nostalgic classics that remind us what pop once was, alongside fresh releases from small independent labels we believe in—because, let’s face it, some of the best hits have always come from the underground, right?
            </div>
            <div class="name_display" id="PROGRESSIVE_HOUSE_display">
            With its solid rollers perfect for maintaining energy on a peak-time dance floor or building a vibe from the ground up, it’s easily one of the most popular sections in the shop. But let’s be real—it can be hit-or-miss. In the 2000s and early 2010s, clubland went mainstream, turning progressive house into a beast, churning out anthems like nobody’s business and becoming a go-to formula for EDM at the time. That’s why we put in the work to keep this section sharp. If you're after a guilty anthem or two, though, head over to our Guilty Pleasures section ;)
            </div>
            <div class="name_display" id="PROGRESSIVE_TECHNO_display">
            An exciting section that blurs the lines between progressive trance and techno, favouring deeper elements over trancy flavours. Perfect tunes to float you through long sets!

            </div>
            <div class="name_display" id="PROGRESSIVE_TRANCE_display">
            Our Progressive Trance section takes the energy of trance and dials it back for a smoother ride. Unlike its more in-your-face counterpart, progressive trance gradually moves through the gears with steady takeoffs and smooth landings.
            </div>
            <div class="name_display" id="PUNK_display">
            Punk might not be our main focus, but we can’t deny the massive influence it’s had on the evolution of music, including the electronic scene. Its raw energy and rebellious spirit has shaped countless genres and inspired artists to push boundaries.
            </div>
            <div class="name_display" id="RAVE_display">
            This is a section full of anything we find that makes you feel like you’re raving in a field somewhere between the M25 and the outskirts of London, circa the 90s. Think acid house, underground warehouse parties, and the raw energy that defined the rave scene.

            </div>
            <div class="name_display" id="REGGAE_display">
            Yeh mon!

            </div>
            <div class="name_display" id="RNB_display">
            
            </div>

            <div class="name_display" id="ROCK_display">
            
            </div>
            <div class="name_display" id="ROMINIMAL_display">
            Romanian Minimal, born in the early 2000s, blends hypnotic grooves, deep basslines, and subtle percussion with an organic, jazz-like flow that’s both intricate and smooth. Pioneered by legends like Raresh, Petre Inspirescu, and Rhadoo, the genre quickly became a global movement, celebrated for its rich, groove-driven sound. If you’re drawn to minimal techno with a fluid, detailed vibe, Rominimal is where the magic truly lies.

            </div>
            <div class="name_display" id="SOULFUL_HOUSE_display">
            Oooo baby, where those deep house grooves mix with those smooth soulful vibes.

            </div>
            <div class="name_display" id="SOUNDTRACK_display">
            If you don’t love a good soundtrack, you probably shouldn't have ears! Directors with impeccable taste in music create huge scores, eerie soundscapes, and cinematic vibes that make these records a must-have. With stunning cover art and top-tier production, they feel like true artifacts in your collection—perfect for both movie lovers and music heads alike.

            </div>
            <div class="name_display" id="SPOKEN_WORD_display">
            Rhythmic, expressive poetry… Someone chatting

            </div>
            <div class="name_display" id="STAFF_PICKS_display">
            Our Staff Picks section is where we showcase the best of the week—anything from fresh new releases by local producers, to unearthed gems, to all-time classics and reissues. It’s a rotating selection of tracks we’re vibing with, always changing, always with something special to discover.
            </div>
            

            <div class="name_display" id="SYNTH_POP_display">
            We love digging through 80s-heavy collections for this very genre—dig through the cheese and uncover those retro-futuristic bangers! While 90s sounds still have their place, we see DJs are starting to explore deeper into the 80s, giving synth pop a fresh resurgence on today’s dance floors.

            </div>
            <div class="name_display" id="TECH_HOUSE_display">
            This one could easily have its own book, but we'll keep it brief. We’ve curated this section for anything that nails the sweet spot between house’s groove and techno’s drive. A history lesson could get messy!

            </div>
            <div class="name_display" id="TECHNO_UK_display">
            Tough as nails, no messin’ about. 

            </div>
            <div class="name_display" id="TECHNO_US_display">
            Hats off to the D!

            </div>
            <div class="name_display" id="TECHNO_WORLD_display">
            The biggest dance music genre right now? Who would've guessed! Dubbed by haters as the "New EDM," but we skip the filler and make room for the killer.

            </div>
            <div class="name_display" id="TRANCE_display">
            Ah, the beloved Trance section! Once a global phenomenon, it still influences mainstream dance music today. But now we all get to sift through its vast output and enjoy the fruits of its journey. Whether you're a DJ who loves fast-paced energy and emotion, a House and Techno DJ looking for a genre crossing set bender for some peak time action, or a pitch-down selector after a low-slung trance chugger, this section delivers. It's a bloody good one.
            </div>

            <div class="name_display" id="TRIBAL_HOUSE_display">
            Who wants some bongos?
            </div>
            <div class="name_display" id="TRIBAL_TECHNO_display">
            Have you been to burning man?

            </div>
            <div class="name_display" id="TRIP_HOP_display">
            Blending chilled hip-hop beats with moody, atmospheric vibes, trip hop emerged from the UK in the '90s. Drawing from jazz, dub, and electronic influences, it’s a go-to for firing up early-day sets or adding late-night introspection to a chill-out room.
            </div>
            <div class="name_display" id="TROUSE_display">
            Its Trancy House!

            </div>
            <div class="name_display" id="UKG_display">
            Punchy kicks and high-pitched snares syncopated through bass-driven goodness. Who doesn’t love a bit of UKG!

            </div>
            <div class="name_display" id="VAPOUR_WAVE_display">
            a glitchy, synth-filled trip back to the '80s and '90s, where slowed-down pop hits meet digital oddities. It's like a neon dream world, but with more awkward mall music and internet nostalgia. Perfect for anyone who wants their beats weird and their vibes extra retro.
            </div>

            <div class="name_display" id="VOCAL_HOUSE_display">
            What started out by being a filtration system for diggers trying to avoid excessive vocals in the House sections, has now become a hotspot for those with perhaps a bit more open-minded taste than us.


            </div>
            <div class="name_display" id="WORLD_display">
            Our globe-trotting collection of sounds that brings the rhythms, melodies, and stories of every corner of the world to your ears.

            </div>

            <div class="name_display" id="BINS_display">
            The dumping ground for Tunes that don’t make the top shelves for some reason. He who dares!

            </div>

            
            

            

          </div></div> 

          

          <div class="row" id="selection">


          
          <p>House, Techno, Trance...</p>
          <Shelve />
          <Shelve />
          <Shelve />
          <p>Electro, Downtempo, Tribal...</p>
          <Shelve />
          <Shelve />
          <p>Bass music, other genres</p>
          
          
          

          





         
          
          
          </div>
          
          <div class="portal_front"/>
          <div class="portal_back"/>

          <div class="portal_effect">
            <div class="layer_1">
            
            </div>
            <div class="layer_2">
              
              </div>
              <div class="layer_3">
              
              </div>
              
          </div>
          
          

          
          
          
        </div>
    );
}
/*<div class="container">
          
          <div class="object_3d">
            
          <div class="bottom_portal"><div class="layer_1"><div class="layer_2"><div class="layer_3"><div class="layer_4"><div class="layer_5"><div class="layer_6"/></div></div>
          </div></div></div></div>
          
          
          </div>
          </div>*/