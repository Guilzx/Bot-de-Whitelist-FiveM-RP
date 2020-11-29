const Discord = require('discord.js')

module.exports.run = async (client, message, args, member) => {
    message.delete()
    if (message.channel.type == "dm") return;
    if(message.channel.id != '745376952424071188') return message.channel.send("> Esse comando só pode ser executado no chat de whitelist!").then(msg => msg.delete({timeout: 7000}))
   const guild = client.guilds.cache.get('722041041829756999');
   const canal = await guild.channels.create(`Whitelist_${message.author}`, {
    type: 'text',
    parent: '727594635114971188',
    permissionOverwrites: [{
        id: guild.roles.cache.find(({ id }) => id === '768636203091230730').id,
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
    }, {
        id: guild.id,
        deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
    }, {
        id: message.author,
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
    }]
   })

  let embedUM = new Discord.MessageEmbed()
  .setFooter(guild.name)
  .setDescription('__Pergunta Número__ **1**\n\n> <a:seta:774071649926381579>Qual o Nome do seu Personagem?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
  .setThumbnail(`${client.user.avatarURL()}`)
  .setColor('#ff0d00')
  .setFooter(guild.name)
  .setTimestamp()
  canal.send(embedUM).then(async msg => {
        let nome = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
            max: 1
        });
        
        nome.on("collect", () => { //Aqui e quando ele coletar o message collector
            canal.bulkDelete(1);
            let guild = client.guilds.cache.get('722041041829756999');
            let embedDOIS = new Discord.MessageEmbed()
            .setFooter(guild.name)
            .setDescription('__Pergunta Número__ **2**\n\n> <a:seta:774071649926381579>Qual seu ID apresentado no Jogo?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
            .setThumbnail(`${client.user.avatarURL()}`)
            .setColor('#ff0d00')
            .setFooter(guild.name)
            .setTimestamp()

            msg.edit(embedDOIS).then(async msg2 => {
                let id = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                    max: 1
                });
              
                id.on("collect", () => {
                    canal.bulkDelete(1);
                    let guild = client.guilds.cache.get('722041041829756999');
                    let embedTRES = new Discord.MessageEmbed()
                    .setFooter(guild.name)
                    .setDescription('__Pergunta Número__ **3**\n\n> <a:seta:774071649926381579>O que significa amor a vida?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                    .setThumbnail(`${client.user.avatarURL()}`)
                    .setColor('#ff0d00')
                    .setFooter(guild.name)
                    .setTimestamp()
                    msg.edit(embedTRES).then(async msg3 => {
                        let amoravida = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                            max: 1
                        });
                      
                        amoravida.on("collect", () => {
                            canal.bulkDelete(1);
                            let guild = client.guilds.cache.get('722041041829756999');
                            let embedQUATRO = new Discord.MessageEmbed()
                            .setFooter(guild.name)
                            .setDescription('__Pergunta Número__ **4**\n\n> <a:seta:774071649926381579>O que significa RDM?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                            .setThumbnail(`${client.user.avatarURL()}`)
                            .setColor('#ff0d00')
                            .setFooter(guild.name)
                            .setTimestamp()
                            msg.edit(embedQUATRO).then(async msg4 => {
                            let rdm = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });
                              rdm.on("collect", () => {
                                canal.bulkDelete(1);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedCINCO = new Discord.MessageEmbed()
                                .setFooter(guild.name)
                                .setDescription('__Pergunta Número__ **5**\n\n> <a:seta:774071649926381579>O que significa VDM?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                                .setThumbnail(`${client.user.avatarURL()}`)
                                .setColor('#ff0d00')
                               .setFooter(guild.name)
                                .setTimestamp()
                            msg.edit(embedCINCO).then(async msg5 => {
                            let vdm = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });
                              vdm.on("collect", () => {
                                canal.bulkDelete(1);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedSEIS = new Discord.MessageEmbed()
                                .setFooter(guild.name)
                                .setDescription('__Pergunta Número__ **6**\n\n> <a:seta:774071649926381579>O que é Combat-Logging?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                                .setThumbnail(`${client.user.avatarURL()}`)
                                .setColor('#ff0d00')
                                .setFooter(guild.name)
                                .setTimestamp()
                            msg.edit(embedSEIS).then(async msg6 => {
                            let combatlogging = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });
                              combatlogging.on("collect", () => {
                                canal.bulkDelete(1);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedSETE = new Discord.MessageEmbed()
                                .setFooter(guild.name)
                                .setDescription('__Pergunta Número__ **7**\n\n> <a:seta:774071649926381579>O que é Meta-Gaming?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                                  .setThumbnail(`${client.user.avatarURL()}`)
                                  .setColor('#ff0d00')
                                  .setFooter(guild.name)
                                  .setTimestamp()
                            msg.edit(embedSETE).then(async msg7 => {
                            let metagaming = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });
                              metagaming.on("collect", () => {
                                canal.bulkDelete(1);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedOITO = new Discord.MessageEmbed()
                                .setFooter(guild.name)
                                  .setDescription('__Pergunta Número__ **8**\n\n> <a:seta:774071649926381579>Se um bandido apontasse a arma na sua cabeça para te assaltar, o que você faria?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                                  .setThumbnail(`${client.user.avatarURL()}`)
                                  .setColor('#ff0d00')
                                  .setFooter(guild.name)
                                  .setTimestamp()
                            msg.edit(embedOITO).then(async msg8 => {
                            let bandidoarma = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });

                            bandidoarma.on("collect", () => {
                                canal.bulkDelete(1);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedNOVE = new Discord.MessageEmbed()
                                .setFooter(guild.name)
                                  .setDescription('__Pergunta Número__ **9**\n\n> <a:seta:774071649926381579>Oque é Power-Gaming?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                                  .setThumbnail(`${client.user.avatarURL()}`)
                                  .setColor('#ff0d00')
                                  .setFooter(guild.name)
                                  .setTimestamp()
                            msg.edit(embedNOVE).then(async msg8 => {
                            let powergaming = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });

                            powergaming.on("collect", () => {
                                canal.bulkDelete(1);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedDEZ = new Discord.MessageEmbed()
                                .setFooter(guild.name)
                                  .setDescription('__Pergunta Número__ **10**\n\n> <a:seta:774071649926381579>Caso você presencie uma situação de ANTI-RP, o que você faria?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                                  .setThumbnail(`${client.user.avatarURL()}`)
                                  .setColor('#ff0d00')
                                  .setFooter(guild.name)
                                  .setTimestamp()
                            msg.edit(embedDEZ).then(async msg8 => {
                            let antirp = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });

                            antirp.on("collect", () => {
                                canal.bulkDelete(1);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedONZE = new Discord.MessageEmbed()
                                .setFooter(guild.name)
                                  .setDescription('__Pergunta Número__ **11**\n\n> <a:seta:774071649926381579>Você está em uma safezone e alguém lhe assalta, o que você faria?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                                  .setThumbnail(`${client.user.avatarURL()}`)
                                  .setColor('#ff0d00')
                                  .setFooter(guild.name)
                                  .setTimestamp()
                            msg.edit(embedONZE).then(async msg8 => {
                            let assaltoinsafe = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });

                            assaltoinsafe.on("collect", () => {
                                canal.bulkDelete(1);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedDOZE = new Discord.MessageEmbed()
                                .setFooter(guild.name)
                                  .setDescription('__Pergunta Número__ **12**\n\n> <a:seta:774071649926381579>Você está andando pela rua. De repente, um bandido te assalta, você reage e é morto o quê você faria após isso?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                                  .setThumbnail(`${client.user.avatarURL()}`)
                                  .setColor('#ff0d00')
                                  .setFooter(guild.name)
                                  .setTimestamp()
                            msg.edit(embedDOZE).then(async msg8 => {
                            let esqueceracao = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });

                            esqueceracao.on("collect", () => {
                                canal.bulkDelete(1);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedTREZE = new Discord.MessageEmbed()
                                .setFooter(guild.name)
                                  .setDescription('__Pergunta Número__ **13**\n\n> <a:seta:774071649926381579>Oque é Dark-RP?\n\n_você possui 1 minutos para responder_ <a:loading:774071665218945035>\n_Somente você e o bot possuem acesso a este canal_\n\n Se falhar, terá que refazer a whitelist!')
                                  .setThumbnail(`${client.user.avatarURL()}`)
                                  .setColor('#ff0d00')
                                  .setFooter(guild.name)
                                  .setTimestamp()
                            msg.edit(embedTREZE).then(async msg8 => {
                            let whitelist = msg.channel.createMessageCollector(m => m.author.id === message.author.id, { //Aqui criamos o message collector
                                max: 1
                            });

                            
                              
                              whitelist.on("collect", () => {
                              canal.bulkDelete(2);
                                let guild = client.guilds.cache.get('722041041829756999');
                                let embedfinal = new Discord.MessageEmbed()
                                .setThumbnail(`${client.user.avatarURL()}`)
                                .setColor('#ff0d00')
                                .setTitle('Nova Whitelist enviada!')
                                .setDescription(`> **Membro:**\n ${message.author}`)
                                .addField('> **Nome do Personagem:**', `${nome.collected.first().content}`)
                                .addField('> **ID:**', `${id.collected.first().content}`)
                                .addField('> **O que significa amor a vida?**', `${amoravida.collected.first().content}`)
                                .addField('> **O que significa RDM?**', `${rdm.collected.first().content}`)
                                .addField('> **Pergunta O que significa VDM?**', `${vdm.collected.first().content}`)
                                .addField('> **O que é Combat-Logging?**', `${combatlogging.collected.first().content}`)
                                .addField('> **O que é Meta-Gaming?**', `${metagaming.collected.first().content}`)
                                .addField('> **Se um bandido apontasse a arma na sua cabeça para te assaltar, o que você faria?**', `${bandidoarma.collected.first().content}`)
                                .addField('> **Oque é Power-Gaming?**', `${powergaming.collected.first().content}`)
                                .addField('> **Caso você presencie uma situação de ANTI-RP, o que você faria?**', `${antirp.collected.first().content}`)
                                .addField('> **Você está em uma safezone e alguém lhe assalta, o que você faria?**', `${assaltoinsafe.collected.first().content}`)
                                .addField('> **Você está andando pela rua. De repente, um bandido te assalta, você reage e é morto o quê você faria após isso?**', `${esqueceracao.collected.first().content}`)
                                .addField('> **Oque é Dark-RP?**', `${whitelist.collected.first().content}`)
                                .setFooter(guild.name)
                                .setTimestamp()
                                message.member.setNickname(`${nome.collected.first().content} | ${id.collected.first().content}`)

                                client.channels.cache.get('771159239296679966').send(embedfinal)
                                let embed1 = new Discord.MessageEmbed()
                                .setColor('#ff0d00')
                                .setTitle('<a:fix:774074076985425940>Formulário Enviado!<a:fix:774074076985425940>')
                                .setDescription(`<a:certo:774071797107785749> Parabéns ${message.author}\n A sua whitelist foi enviada para nossa equipe e você receberá sua resposta em breve!\n\n > _Dica: Fique de olho nos canais: <#762051860945174538> & <#762051937930969138>_\n\n _Este canal será fechado em 20 Segundos!_`)
                                .setFooter(guild.name)
                                .setTimestamp()
                                canal.send(embed1)
                                setTimeout(() => {
                                     canal.delete()
                                            }, 20000)

                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                     })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
}