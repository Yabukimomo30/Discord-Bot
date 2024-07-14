const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ownerinfo',
    description: 'Returns Information about PHV Owner',
    emoji: '👑',
    userperm: ['SEND_MESSAGES'],
    botperm: ['SEND_MESSAGES'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const ownerId = '1074763726856654898'; // Replace with your owner's ID
        try {
            const owner = await client.users.fetch(ownerId);
            const embed1 = new MessageEmbed()
                .setTitle('👑 Owner Info')
                .setThumbnail(owner.displayAvatarURL({ dynamic: true }))
                .addFields(
                    { name: 'Name', value: owner.username },
                    { name: 'Discord tag', value: owner.tag },
                    { name: 'Working on', value: 'Bot development, YouTube, Discord Bots' },
                    {
                        name: 'Socials',
                        value: '[Website](https://guns.lol/unibypasser) | [GitHub](https://github.com/Earlpolloso) | [YouTube](https://www.youtube.com/@Earlpolloso22)',
                    },
                    { name: 'Discord', value: '[Join discord](https://discord.gg/4vpJRCNvYA)' }
                )
                .setColor(owner.hexAccentColor || '#800080');
            message.channel.send({ embeds: [embed1] });
        } catch (error) {
            console.error('Error fetching owner:', error);
            message.channel.send('An error occurred while fetching owner information.');
        }
    },
};
