"use client";
import { useState } from "react"
import Project from "./project";
import Capture from '../../ui/images/Capture.png';
import kmeans from '../../ui/images/kmeans.png'
import getis from '../../ui/images/getis.png'
import glowart from '../../ui/images/glowart.png'

const projects = [
    {
        'id': 'Collision Avoidance Neural Network',
        img : Capture,
        description: 'I developed a Neural Network using Pytorch to help a robot navigate an environment and seek a goal shown by the blue circle. The project began with data collection, preprocessing the data to a useable dataset, then constructing and training a Neural Network. My Neural Network achieved had over 99% accuracy on the test dataset, with 4 collisions in a test of one thousand goals.',
        technologies : "Pytorch, NumPy, Pandas, Python, SciPy"
    
    },
    {
        'id': 'Implementation of K-Means',
        img : kmeans,
        description : 'To gain a better understanding of Machine Learning fundamentals, I created the K-means clustering algorithm from scratch, without any machine learning libraries. I implemented both the standard K-means with random centroids and K-Means++ with furthest-point centroid initialization. Demonstrated above is successful clustering of given data.',
        technologies : 'Python, Pandas, NumPy'
    },
    {
        'id': 'Geospatial Data Analysis',
        img : getis,
        description : 'I utilized my strong knowledge of SQL, Apache Spark, and Scala to conduct geospatial analysis on NYC taxi data to identify statistically significant rider activity locations. Activity was measured as significant via the Getis-Ord Statistic which calculated the `heat` of a given location given the activities of its neighbors. Was able to successfully identify the most active rider locations to present to client.',
        technologies : 'SQL, Apache Spark, Scala'
    },
    {
        id : 'Glow Art Vibes',
        img : glowart,
        description : 'A project I built over the course of a week for my first hackathon I participated in. We were tasked with creating an art app that would allow for a user to draw, and add any creative abilities to it as we saw fit. We decided we wanted to make a pixel art app with the capability to upload an image to recreate and extract the colors for use. I worked on the grid, color extractor logic, the file upload logic, routing, some landing page styling, and color palette logic.',
        technologies : 'React, JavaScript, Sass'
    }
]
export default function Projects() {
    return (
        <div id='#projects' className="min-h-screen pb-12 sm:pb-0 mb-6 font-roboto">
            <h2 className="text-3xl font-semibold text-center mx-auto mb-24 font-lato">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full sm:w-3/4 mx-auto gap-5 text-center mb-12">
                {projects.map((p, i) => 
                    <Project key={i} id={p.id} img={p.img} description={p.description} technologies={p.technologies}/>
                )}
            </div>
            
        </div>
      )
}