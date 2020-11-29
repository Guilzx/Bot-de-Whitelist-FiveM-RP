const Discord = require('discord.js');
const mysql = require('mysql');

module.exports.run = async (client, message, args) => {
    message.delete()
    const guild = client.guilds.cache.get('722041041829756999')

    const connection = mysql.createConnection({ 
          host: '177.54.149.133',
          user: 'hiverp',
          password: 'hive1172020',
          database: 'vrpex'
        });
        connection.connect((err) => {
        });

        let member = message.mentions.members.first()
        if (!member) return message.channel.send("> Você deve mencionar um membro!")
        let motivo = args.slice(1).join(' ');
        if (!motivo) return message.channel.send("> Você deve adicionar um motivo!")
        let id = member.nickname.slice(-3)

        let role = message.guild.roles.cache.get('774160073282420756')
        let removerole = message.guild.roles.cache.get('722140006931628083')
        member.roles.add(role);
        member.roles.remove(removerole)

        setInterval(function () {
            connection.query('SELECT 1');
          }, 5000);
            connection.query(`UPDATE vrp_users SET banned = '1' WHERE id = '${id}'`, (err, rows) => {

            let embed = new Discord.MessageEmbed()
            .setColor("#ff0f00")
            .setTitle('Novo Banimento!')
            .setDescription(`> **__Membro:__**\n${member} / \`${member.user.username}#${member.user.discriminator}\`\n\n> **__ID:__**\n${id}\n\n> **__Motivo:__**\n${motivo}`)
            .setThumbnail(`${client.user.avatarURL()}`)
            .setFooter(guild.name)
            .setTimestamp()
            client.channels.cache.get('779537563751809054').send(embed)

                let banmensagem = (`Você acaba de ser banido do Servidor **${guild.name}**\n**Banido por:** ${message.author}\n**Motivo:** ${motivo}`)
                member.send(banmensagem)
         })
} 