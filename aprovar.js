const Discord = require('discord.js');
const mysql = require('mysql');

module.exports.run = async (client, message, args) => {
    message.delete()
    const guild = client.guilds.cache.get('722041041829756999')

   const connection = mysql.createConnection({ 
          host: 'IP',
          user: 'user',
          password: 'SENHHA',
          database: 'vrpex'
        });
        connection.connect((err) => {
        });

      if (!message.member.hasPermission('MUTE_MEMBERS')) {
      return message.channel.send("> **Você não possui permissão para utilizar esse comando.** ``[MUTE_MEMBERS]``")
    }
    
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("> Você deve mencionar um membro!")

        let id = member.nickname.slice(-3)

        let role = message.guild.roles.cache.get('722140006931628083')
        let removerole = message.guild.roles.cache.get('733419908318232649')
        member.roles.add(role)
        member.roles.remove(removerole)

          setInterval(function () {
            connection.query('SELECT 1');
          }, 5000);
            connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${id}'`, (err, rows) => {
              let embed = new Discord.MessageEmbed()
              .setTitle('Formulário Aprovado!')
              .setDescription(`> **__Membro:__**\n${member} / \`${member.user.username}#${member.user.discriminator}\` \n\n> **__Aprovado por:__**\n${message.author}\n\n> **__ID:__**\n \`\`\`${id}\`\`\`\n**__Como Conectar:__**\n \`\`\`py\n#Tecle F8 e digite no console:\nconnect 177.54.149.133\n\`\`\` `)
              .setColor('#09f340')
              .setFooter(guild.name)
              .setTimestamp()
            client.guilds.cache.get('722041041829756999').channels.cache.get('771106946240610335').send(embed)
            let embedmember = new Discord.MessageEmbed()
            .setTitle('Aprovado!<a:certo:770324281837224016>')
            .setDescription('Você foi aprovado na Whitelist do **NOME DO SERVIDOR!**\nSeja bem-vindo à cidade!\n\n**__Como Conectar:__**\n \`\`\`py\n#Tecle F8 e digite no console:\nconnect id do servidor \n\n#IP do TokoVoip:\n IP TOKOVOIP\n\`\`\`')
            .setColor('#09f340')
            .setFooter(guild.name)
            .setTimestamp()
            member.send(embedmember)
          })
} 