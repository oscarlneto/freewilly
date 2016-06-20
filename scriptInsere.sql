insert into usuario (usuario, senha, nome, aniversario, foto, descricao) values ('thrall', 'thrall', 'Goel', '1992-04-14', 'thrall.png', 'Thrall (birthname Goel), son of Durotan, was the Warchief of the restored orcish Horde and ruler of the red land of Durotar in Kalimdor.');
insert into usuario (usuario, senha, nome, aniversario, foto, descricao) values ('jaina', 'jaina', 'Jaina Proudmoore', '1992-04-14', 'jaina.png', 'Jaina Proudmoore is the founder and former Lady of Theramore Isle (as well as its only leader during its brief existence), the Alliances major port in southern Kalimdor.');
insert into usuario (usuario, senha, nome, aniversario, foto, descricao) values ('anduin', 'anduin', 'Anduin Wrynn', '1992-04-14', 'anduin.png', 'Anduin Llane Wrynn is the heir to the throne of Stormwind. He is named after two venerated figures of Stormwind history: the legendary Anduin Lothar and his grandfather, King Llane.');
insert into usuario (usuario, senha, nome, aniversario, foto, descricao) values ('valeera', 'valeera', 'Valeera Sanguinar', '1992-04-14', 'valeera.png', 'Valeera Sanguinar, along with Broll Bearmantle, was a companion of Varian Wrynn.');
insert into usuario (usuario, senha, nome, aniversario, foto, descricao) values ('uther', 'uther', 'Uther the Lightbringer', '1992-04-14', 'uther.png', 'Lord Uther the Lightbringer, or Sir Uther Lightbringer, was the first paladin of the Knights of the Silver Hand who led his Order in battle against the Horde during the Second war.');
insert into usuario (usuario, senha, nome, aniversario, foto, descricao) values ('guldan', 'guldan', 'Guldan', '1992-04-14', 'guldan.png', 'Guldan of the Stormreaver Clan was a former orcish shaman of the Shadowmoon Clan from Draenor, who became the first orcish warlock as well as the founder of the Orcish Horde.');
insert into usuario (usuario, senha, nome, aniversario, foto, descricao) values ('garrosh', 'garrosh', 'Garrosh Hellscream', '1992-04-14', 'garrosh.png', 'Garrosh Hellscream was the son of Grom Hellscream and former chieftain of the Warsong clan.');
insert into usuario (usuario, senha, nome, aniversario, foto, descricao) values ('malfurion', 'malfurion', 'Malfurion Stormrage', '1992-04-14', 'malfurion.png', 'Malfurion Stormrage was the first night elf druid, and initiated the mainstream use of druidism among the night elven people ten millennia ago under tutelage of the demigod Cenarius within Valsharah.');
insert into usuario (usuario, senha, nome, aniversario, foto, descricao) values ('rexxar', 'rexxar', 'Rexxar', '1992-04-14', 'rexxar.png', 'Rexxar, Champion of the Horde, is a half-ogre, half-orc beastmaster of the MokNathal clan, and may be one of the last born half-ogres of the clan.');

insert into grupo (usuario, nome, foto, descricao) values ('thrall', 'The Horde', 'thrall.png', 'The Horde, have survived in the hostile world of Azeroth by forging alliances with local races such as the Tauren people, the Trolls, and the undead of the Forsaken.');
insert into grupo (usuario, nome, foto, descricao) values ('malfurion', 'The Alliance', 'thrall.png', 'The Alliance consists of powerful cultures and groups bound not by desperation or necessity, but by their deep commitments to abstract concepts like nobility and honor.');
insert into grupo (usuario, nome, foto, descricao) values ('thrall', 'Hearthstone', 'thrall.png', 'Hearthstone is a free-to-play digital strategy card game that anyone can enjoy. Players choose one of nine epic Warcraft heroes to play as.');
insert into grupo (usuario, nome, foto, descricao) values ('uther', 'Tankz Rlz', 'thrall.png', 'Group dedicated to the discussion of which class is THE BEST for tanking raids');
insert into grupo (usuario, nome, foto, descricao) values ('valeera', '2.Trade Channel', 'thrall.png', 'Mind if a roll need?');
insert into grupo (usuario, nome, foto, descricao) values ('anduin', 'Heal Bot, red alert', 'thrall.png', 'AAaaaaall healed.');
insert into grupo (usuario, nome, foto, descricao) values ('garrosh', 'Azralon', 'thrall.png', 'Official Azralon realm group');
insert into grupo (usuario, nome, foto, descricao) values ('uther', 'Nemesis', 'thrall.png', 'Official Nemesis realm group');

/*insercao dos usuarios nos grupos*/
insert into grupousuarios (idgrupo, usuario) values (1, 'thrall');
insert into grupousuarios (idgrupo, usuario) values (2, 'jaina');
insert into grupousuarios (idgrupo, usuario) values (2, 'anduin');
insert into grupousuarios (idgrupo, usuario) values (2, 'valeera');
insert into grupousuarios (idgrupo, usuario) values (2, 'uther');
insert into grupousuarios (idgrupo, usuario) values (1, 'guldan');
insert into grupousuarios (idgrupo, usuario) values (1, 'garrosh');
insert into grupousuarios (idgrupo, usuario) values (2, 'malfurion');
insert into grupousuarios (idgrupo, usuario) values (1, 'rexxar');

insert into grupousuarios (idgrupo, usuario) values (3, 'thrall');
insert into grupousuarios (idgrupo, usuario) values (3, 'jaina');
insert into grupousuarios (idgrupo, usuario) values (3, 'anduin');
insert into grupousuarios (idgrupo, usuario) values (3, 'valeera');
insert into grupousuarios (idgrupo, usuario) values (3, 'uther');
insert into grupousuarios (idgrupo, usuario) values (3, 'guldan');
insert into grupousuarios (idgrupo, usuario) values (3, 'garrosh');
insert into grupousuarios (idgrupo, usuario) values (3, 'malfurion');
insert into grupousuarios (idgrupo, usuario) values (3, 'rexxar');

insert into grupousuarios (idgrupo, usuario) values (4, 'uther');
insert into grupousuarios (idgrupo, usuario) values (4, 'garrosh');
insert into grupousuarios (idgrupo, usuario) values (4, 'malfurion');

insert into grupousuarios (idgrupo, usuario) values (5, 'valeera');
insert into grupousuarios (idgrupo, usuario) values (5, 'guldan');
insert into grupousuarios (idgrupo, usuario) values (5, 'anduin');
insert into grupousuarios (idgrupo, usuario) values (5, 'jaina');

insert into grupousuarios (idgrupo, usuario) values (6, 'anduin');
insert into grupousuarios (idgrupo, usuario) values (6, 'thrall');
insert into grupousuarios (idgrupo, usuario) values (6, 'uther');
insert into grupousuarios (idgrupo, usuario) values (6, 'malfurion');

insert into grupousuarios (idgrupo, usuario) values (7, 'garrosh');
insert into grupousuarios (idgrupo, usuario) values (7, 'malfurion');
insert into grupousuarios (idgrupo, usuario) values (7, 'uther');
insert into grupousuarios (idgrupo, usuario) values (7, 'valeera');

insert into grupousuarios (idgrupo, usuario) values (8, 'uther');
insert into grupousuarios (idgrupo, usuario) values (8, 'anduin');
insert into grupousuarios (idgrupo, usuario) values (8, 'guldan');
insert into grupousuarios (idgrupo, usuario) values (8, 'jaina');

/*criacao de posts nos grupos*/
insert into post (usuario, titulo, conteudo, idgrupo) values ('thrall', 'For the Horde!', 'For the Frostwolves!', 1); --1
insert into post (usuario, titulo, conteudo, idgrupo) values ('garrosh', 'For the Horde!', 'For the Hellscream!', 1); --2
insert into post (usuario, titulo, conteudo, idgrupo) values ('rexxar', 'Place is the place', 'SMOrc!', 1); --3
insert into post (usuario, titulo, conteudo, idgrupo) values ('guldan', 'Your soul shall be mine!', 'Never tap last', 1); --4

insert into post (usuario, titulo, conteudo, idgrupo) values ('uther', 'Well Met!', 'Dont forget to put your faith in the light', 2); --5
insert into post (usuario, titulo, conteudo, idgrupo) values ('anduin', 'The light shall bring victory', 'or not?', 2);--6
insert into post (usuario, titulo, conteudo, idgrupo) values ('malfurion', 'We must protect the wild', 'from the burning legion', 2);--7
insert into post (usuario, titulo, conteudo, idgrupo) values ('jaina', 'My magic shall burn', 'PYROBLAST', 2);--8

insert into post (usuario, titulo, conteudo, idgrupo) values ('thrall', 'OMG!! 500 ranked victories', 'FOR DOOMHAMMER!', 3);--9
insert into post (usuario, titulo, conteudo, idgrupo) values ('anduin', 'Oh Really?', '12 wins arena, you noob', 3);--10
insert into post (usuario, titulo, conteudo, idgrupo) values ('malfurion', 'They nerfed my combo', 'we cant protect the wild anymore', 3);--11
insert into post (usuario, titulo, conteudo, idgrupo) values ('jaina', 'ResidentSleeper', 'freeze mage is so boring', 3);--12

insert into post (usuario, titulo, conteudo, idgrupo) values ('uther', 'Best tank ever', '600k HP with divine shield', 4);--13
insert into post (usuario, titulo, conteudo, idgrupo) values ('garrosh', 'Bitch, please', 'TANK UP', 4);--14
insert into post (usuario, titulo, conteudo, idgrupo) values ('malfurion', 'Omg man', 'i am a ******* BEAST', 4);--15

insert into post (usuario, titulo, conteudo, idgrupo) values ('valeera', 'LW LFW', 'cheapest leatherworking in Azeroth', 5);--16
insert into post (usuario, titulo, conteudo, idgrupo) values ('guldan', 'I need some things, @valeera', 'how much?', 5);--17
insert into post (usuario, titulo, conteudo, idgrupo) values ('anduin', 'BUY ALL YOUR DRAENOR ORES', 'because im tired of farming', 5);--18

insert into post (usuario, titulo, conteudo, idgrupo) values ('anduin', 'LF DPS and TANK', '710+ ilvl', 6);--19
insert into post (usuario, titulo, conteudo, idgrupo) values ('thrall', 'I can do that, @anduin', '70k mdps or 100k rdps', 6);--20
insert into post (usuario, titulo, conteudo, idgrupo) values ('uther', 'Well Met!', 'my OS is tanker, i can you help too @anduin', 6);--21

insert into post (usuario, titulo, conteudo, idgrupo) values ('thrall', 'BEST SERVER EVER', 'omg... i love the horde', 7);--22

insert into post (usuario, titulo, conteudo, idgrupo) values ('uther', 'Well....', 'ok. i will stop doing that', 8);--23

/*criacao da relacao de follow*/
/*Todos da Horda se seguem mutuamente*/
insert into follow (usuario, follow) values ('guldan', 'thrall');
insert into follow (usuario, follow) values ('guldan', 'garrosh');
insert into follow (usuario, follow) values ('guldan', 'rexxar');

insert into follow (usuario, follow) values ('thrall', 'guldan');
insert into follow (usuario, follow) values ('thrall', 'garrosh');
insert into follow (usuario, follow) values ('thrall', 'rexxar');

insert into follow (usuario, follow) values ('garrosh', 'thrall');
insert into follow (usuario, follow) values ('garrosh', 'guldan');
insert into follow (usuario, follow) values ('garrosh', 'rexxar');

insert into follow (usuario, follow) values ('rexxar', 'guldan');
insert into follow (usuario, follow) values ('rexxar', 'garrosh');
insert into follow (usuario, follow) values ('rexxar', 'thrall');

/*Todos da Allianca se seguem mutuamente*/
insert into follow (usuario, follow) values ('jaina', 'anduin');
insert into follow (usuario, follow) values ('jaina', 'valeera');
insert into follow (usuario, follow) values ('jaina', 'uther');
insert into follow (usuario, follow) values ('jaina', 'malfurion');

insert into follow (usuario, follow) values ('anduin', 'jaina');
insert into follow (usuario, follow) values ('anduin', 'valeera');
insert into follow (usuario, follow) values ('anduin', 'uther');
insert into follow (usuario, follow) values ('anduin', 'malfurion');

insert into follow (usuario, follow) values ('valeera', 'jaina');
insert into follow (usuario, follow) values ('valeera', 'anduin');
insert into follow (usuario, follow) values ('valeera', 'uther');
insert into follow (usuario, follow) values ('valeera', 'malfurion');

insert into follow (usuario, follow) values ('uther', 'jaina');
insert into follow (usuario, follow) values ('uther', 'anduin');
insert into follow (usuario, follow) values ('uther', 'valeera');
insert into follow (usuario, follow) values ('uther', 'malfurion');

insert into follow (usuario, follow) values ('malfurion', 'jaina');
insert into follow (usuario, follow) values ('malfurion', 'anduin');
insert into follow (usuario, follow) values ('malfurion', 'valeera');
insert into follow (usuario, follow) values ('malfurion', 'uther');

/*criacao das reacoes nos posts*/
/*reacoes no grupo da Horda*/
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (1, 'garrosh', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (1, 'guldan', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (1, 'rexxar', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (2, 'thrall', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (2, 'guldan', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (2, 'rexxar', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (3, 'guldan', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (4, 'rexxar', 1, false, null);

/*reacoes no grupo da Horda*/
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (5, 'malfurion', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (5, 'anduin', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (5, 'jaina', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (5, 'valeera', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (6, 'uther', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (7, 'anduin', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (8, 'anduin', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (8, 'uther', 1, false, null);

/*reacoes no grupo do Hearthtone*/
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (9, 'uther', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (9, 'anduin', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (9, 'guldan', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (9, 'rexxar', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (9, 'garrosh', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (10, 'malfurion', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (10, 'jaina', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (11, 'anduin', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (11, 'jaina', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (12, 'guldan', 1, false, null);

/*reacoes no grupo dos tankers*/
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (13, 'garrosh', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (13, 'malfurion', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (14, 'uther', 1, false, null);

/*reacoes no grupo de trade*/
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (16, 'guldan', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (16, 'anduin', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (17, 'valeera', 1, false, null);

/*reacoes no grupo dos healers*/
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (19, 'thrall', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (19, 'uther', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (20, 'anduin', 1, false, null);

/*reacoes no grupo do azralon*/
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (22, 'guldan', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (22, 'rexxar', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (22, 'garrosh', 1, false, null);

/*reacoes no grupo do nemesis*/
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (23, 'anduin', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (23, 'valeera', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (23, 'malfurion', 1, false, null);
insert into postreacao (idpost, usuario, reacao, compartilhou, donopost) values (23, 'jaina', 1, false, null);