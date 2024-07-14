const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'story',
    description: 'Story of allin1 Bot',
    userperm: ['SEND_MESSAGES'],
    botperm: ['SEND_MESSAGES'],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        try {
            const prefix = process.env.PREFIX; // Get the custom prefix from the environment variable

            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('PHV Bot Story')
                .setDescription(
                    'A bot made by earl'
                )
                .addField('Join Our Discord', '[Discord](https://discord.gg/4vpJRCNvYA)', true)
                .addField('Follow PHV on GitHub', '[GitHub](https://www.youtube.com/@Earlpolloso22)', true)
                .setFooter(`Thank you for using the story command!`);

            // Process the interaction response in a single location
            const processInteractionResponse = () => {
                interaction.reply({ embeds: [embed] })
                    .catch(error => {
                        console.error('Failed to send interaction response:', error);
                    });
            };

            // Add your other event listeners or middleware for interactions
            // ...

            // Call the function to send the interaction response
            processInteractionResponse();
        } catch (error) {
            console.error(error);
        }
    },
};
