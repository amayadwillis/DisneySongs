## Disney Project: A Focus on Songs from the *Aladdin* Franchise: Project Review

* Site publication: <https://amayadwillis.github.io/DisneySongs/>
* GitHub: <https://github.com/amayadwillis/DisneySongs/>
* Developers: Jacqueline Chan, Amaya Willis, Thomas Sheehy
* Date of Evaluation: 2021-05-11
* Evaluated by: @ebeshero

### Project introduction 
Your opening page helps to demonstrate from the start that this is a serious analysis of a collection, organizing songs by composers and characters and actors from Aladdin. It may be a surprise that this is a Table of Contents to the site! It is very elaborate as such, leading us directly into the Individual Analysis portion of the site. 


### Research questions:
You did a remarkably fine job of articulating your research questions. (Just make sure you spell Research Question properly in your heading on [project.html](https://amayadwillis.github.io/DisneySongs/project.html).) It's clear that you were interested in linguistics questions about recurring language.

Also, you provide a super clear and precise explanation of the limits of your source data: what you couldn’t access, and what you chose to exclude and why. 


### Visualizations and analysis
Your project is absolutely impressive in the sheer quantity of graphs you've embedded on your site! However, several of the charts are not showing in the Individual Analysis section. Trends, Bubble Chart, and Cirrus embeds DO lead to graphs when you haven’t indicated “Too short for a visualization,” but the frequency of broken embeds even just a few days after project submission suggests that this Individual Analysis page will be difficult to maintain because it is relying so heavily on importing from an unstable source (alas, I wish Voyant were more stable!). Let’s think about some alternatives! You can output SVGs yourselves for bubble charts and networks, and there will  be some Python libraries to assist with things like bubble plots and “Cirrus” word clouds: (For example, see <https://www.datacamp.com/community/tutorials/wordcloud-python> and I think we can use pip3 to just install the matplotlib library and then install the word cloud library to work with.)

The visualizations for the collection level are perhaps the most illuminating because they illuminate patterns across your text corpus to help us “read” the Disney franchise from a distance. The interactive network visualizations help orient us very quickly to the main composers and voice actors in the franchise. I think you should find a way to feature the Collection Analysis from the index page of the site before you dive in to the detailed song by song analysis: show us an overview before we dive into the song-by-song details. The up-close and distant surveys do complement each other well, as we can see how particular songs fit or deviate from the dominant patterns in the collection. You might comment more in the collection analysis about your findings from natural language processing: What patterns did you find most remarkable in the nouns, pronouns, adverbs....punctuation marks? What might they tell us about the way the *Aladdin* franchise appeals to its viewers/listeners?

### Code documentation
You did an outstanding job of documenting how you designed and developed this project from its code! It's clear that you had a strong understanding of each stage of your work on this project because your documentation is clear and precise. My only complaint here is that the screen captures of your code view are a little fuzzy—it would be better to use `<pre>` elements in your HTML (which preserves formatting), then paste in your code, and replace the angle brackets with escape characters: &lt; for left angle bracket `<` , and `&gt;` for right angle backet. `>` (This is how I make code blocks for our tutorial pages on newtfire.) I would love to see you update this on your site because your explanation of your code is so very good! Being able to see the code blocks more clearly would be super helpful to future generations fo students. 

### Concluding remarks
You put lots of energy into visualizing data in this project, and your project site reflects how very much you learned! It is also a wonderful launching point for a larger project on even more songs. I look forward to seeing how this site develops if you decide to continue it next year! 
