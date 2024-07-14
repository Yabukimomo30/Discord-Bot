const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'story',
    description: 'Story of Allin1 Bot',
    userperm: 'SEND_MESSAGES',
    botperm: 'SEND_MESSAGES',
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
                .setTitle('Allin1 Bot Story')
                .setDescription(
                    'A bot made by ear;'
                )
                .addField('Join Our Discord', '[Discord](https://discord.gg/UV22V6fEAv)', true)
                .addField('Follow PHV on GitHub', '[GitHub](https://github.com/PHV08)', true)
                .setFooter(`Thank you for using the story command!`);

            interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
        }
    },
};
