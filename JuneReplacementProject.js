
module.exports = {
    title: "June Replacement Project", 
    author: "Justin (<a href='https://twitter.com/static_dragon98'>@static-dragon</a>)",
    modVersion: 1.0,

    description: `<p>Replace all instances of June's deadname</p>`,

    edit(archive) {
        // this might be really inefficient, but it only runs once each reload
        for (let i = 1790; i < 9999; i++) {
            const pageString = `00${i}`;

            // if the page exists (prevents certain errors)
            if (archive.mspa.story[pageString]) {
                // check if June is mentioned in content
                if (archive.mspa.story[pageString].content.includes('John')) {
                    archive.mspa.story[pageString].content =
                        archive.mspa.story[pageString].content.replace(
                            "John", 
                            "June"
                        )
                }else if (archive.mspa.story[pageString].content.includes('JOHN')) { 
                    archive.mspa.story[pageString].content =
                        archive.mspa.story[pageString].content.replace(
                            "JOHN", 
                            "JUNE"
                        )
                }
                // check if June is mentioned in title
                if (archive.mspa.story[pageString].title.includes('John:')) {
                    archive.mspa.story[pageString].title =
                        archive.mspa.story[pageString].title.replace(
                            "John: ", 
                            "June: "
                        )
                }else if (archive.mspa.story[pageString].title.includes('JOHN')) { 
                    archive.mspa.story[pageString].title =
                        archive.mspa.story[pageString].title.replace(
                            "JOHN: ", 
                            "JUNE: "
                        )
                } 
            }
        }
    },
}
