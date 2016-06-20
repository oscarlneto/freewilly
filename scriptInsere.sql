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

