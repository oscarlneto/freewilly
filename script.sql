DROP TABLE Usuario CASCADE;
DROP TABLE Post CASCADE;
DROP TABLE Grupo CASCADE;
DROP TABLE GrupoUsuarios CASCADE;
DROP TABLE Follow CASCADE;
DROP TABLE PostReacao CASCADE;

/* 
 * Tabela Secao: contem informacoes sobre as secoes de cada zona eleitoral.
 *	@nroZona (Chave primaria e estrangeira): referencia o atributo de mesmo nome na tabela Zona;
 *	@estadoZona (Chave primaria e estrangeira): referencia o atributo estadoZona da tabela Zona;
 *	@nroSecao (Chave primaria): numero da secao eleitoral dentro de uma zona;
 *	@localSecao: descricao da localizacao da secao;
 *	@qtdEleitoresS (Atributo derivado): indica o numero de eleitores que votam na secao. 
 */
CREATE TABLE Usuario (
	usuario VARCHAR(10) NOT NULL,
	senha VARCHAR(10) NOT NULL,	
	nome VARCHAR(30) NOT NULL,
	aniversario DATE,
	foto VARCHAR(50),
	descricao VARCHAR(200),
	CONSTRAINT PKusuario PRIMARY KEY (usuario)
);

CREATE TABLE Follow (
	usuario VARCHAR(10) NOT NULL,
	follow VARCHAR(10) NOT NULL,
	CONSTRAINT FKusuario FOREIGN KEY (usuario) REFERENCES Usuario (usuario) ON DELETE CASCADE,
	CONSTRAINT FKfollow FOREIGN KEY (follow) REFERENCES Usuario (usuario) ON DELETE CASCADE,
	CONSTRAINT PKfollow PRIMARY KEY (usuario, follow)
);

CREATE TABLE Grupo (
	idGrupo SERIAL NOT NULL,
	usuario VARCHAR(10) NOT NULL,
	nome VARCHAR(20) NOT NULL,
	foto VARCHAR(50),
	descricao VARCHAR(200),
	CONSTRAINT PKgrupo PRIMARY KEY (idGrupo),
	CONSTRAINT FKusuario FOREIGN KEY (usuario) REFERENCES Usuario (usuario) ON DELETE CASCADE,
	UNIQUE (usuario, nome)
);

CREATE TABLE GrupoUsuarios (
	idGrupo INTEGER NOT NULL,
	usuario VARCHAR(10) NOT NULL,
	CONSTRAINT FKgrupo FOREIGN KEY (idGrupo) REFERENCES Grupo (idGrupo) ON DELETE CASCADE,
	CONSTRAINT FKusuario FOREIGN KEY (usuario) REFERENCES Usuario (usuario) ON DELETE CASCADE,
	CONSTRAINT PKgrupoUsuarios PRIMARY KEY (idGrupo, usuario)
);

CREATE TABLE Post (
	idPost SERIAL NOT NUll,
	usuario VARCHAR(10) NOT NULL,
	titulo VARCHAR(30) NOT NULL,
	conteudo VARCHAR(300) NOT NULL,
	data TIMESTAMP DEFAULT CURRENT_TIMESTAMP(2),
	idGrupo INTEGER,
	CONSTRAINT PKpost PRIMARY KEY (idPost),
	CONSTRAINT FKusuario FOREIGN KEY (usuario) REFERENCES Usuario (usuario) ON DELETE CASCADE,
	CONSTRAINT FKgrupo FOREIGN KEY (idGrupo) REFERENCES Grupo (idGrupo) ON DELETE CASCADE
);

CREATE TABLE PostReacao (
	idPost INTEGER NOT NULL,
	usuario VARCHAR(10) NOT NULL,
	reacao INTEGER DEFAULT 0,
	donoPost VARCHAR(10),
	compartilhou BOOLEAN DEFAULT FALSE,
	CONSTRAINT FKpost FOREIGN KEY (idPost) REFERENCES Post (idPost) ON DELETE CASCADE,
	CONSTRAINT FKusuario FOREIGN KEY (usuario) REFERENCES Usuario (usuario) ON DELETE CASCADE,
	CONSTRAINT FKdonoPost FOREIGN KEY (donoPost) REFERENCES Usuario (usuario) ON DELETE CASCADE,
	CONSTRAINT PKpostReacao PRIMARY KEY (idPost, usuario),
	CONSTRAINT CHreacao CHECK (reacao IN (0, 1, 2))
);