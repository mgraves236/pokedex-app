import React, {useState} from 'react';
import { motion } from 'framer-motion';

export default function LoadingWave() {
    const pokeballContainerVariants = {
        start: {
            transition: {
                staggerChildren: 0.1
            }
        },
        end: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const pokeballVariants = {
        start: {
            y: '0%'
        },
        end: {
            y: '100%'
        }
    };

    const pokeballTransition = {
        duration: 0.6,
        yoyo: Infinity,
        ease: "easeInOut"
    };

    return (
        <div className="loadingContainer">
            <motion.div className="pokeballContainer" variants={pokeballContainerVariants}
                        initial="start" animate="end">
            <motion.img className="pokeball" src="pokeball.svg"
                        variants={pokeballVariants} transition={pokeballTransition}/>
            <motion.img className="pokeball" src="pokeball.svg"
                        variants={pokeballVariants} transition={pokeballTransition}/>
            <motion.img className="pokeball" src="pokeball.svg"
                        variants={pokeballVariants} transition={pokeballTransition}/>
            </motion.div>
            <p>Loading...</p>
        </div>
    );
}