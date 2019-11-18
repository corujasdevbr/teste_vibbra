IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Locations] (
    [Id] uniqueidentifier NOT NULL,
    [DateCreated] datetime2 NOT NULL,
    [DateUpdate] datetime2 NOT NULL,
    [Name] VARCHAR(150) NOT NULL,
    [TypePlace] int NOT NULL,
    [Cep] CHAR(9) NOT NULL,
    [Address] VARCHAR(100) NOT NULL,
    [District] VARCHAR(100) NOT NULL,
    [City] VARCHAR(100) NOT NULL,
    [State] CHAR(2) NOT NULL,
    [Image] VARCHAR(350) NOT NULL,
    [NumberTables] INT NOT NULL,
    [NumberChairs] INT NOT NULL,
    [HourlyCost] DECIMAL(17,2) NOT NULL,
    CONSTRAINT [PK_Locations] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Users] (
    [Id] uniqueidentifier NOT NULL,
    [DateCreated] datetime2 NOT NULL,
    [DateUpdate] datetime2 NOT NULL,
    [UserName] VARCHAR(100) NOT NULL,
    [CompanyName] VARCHAR(100) NULL,
    [CNPJ] VARCHAR(18) NULL,
    [Email] VARCHAR(100) NOT NULL,
    [Password] VARCHAR(20) NOT NULL,
    [TypeUser] INT NOT NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Professionals] (
    [Id] uniqueidentifier NOT NULL,
    [DateCreated] datetime2 NOT NULL,
    [DateUpdate] datetime2 NOT NULL,
    [Name] VARCHAR(100) NOT NULL,
    [RG] VARCHAR(15) NOT NULL,
    [CPF] VARCHAR(14) NOT NULL,
    [Profession] VARCHAR(100) NULL,
    [Linkedin] VARCHAR(100) NULL,
    [Facebook] VARCHAR(100) NULL,
    [Twitter] VARCHAR(100) NULL,
    [CelPhone] VARCHAR(18) NULL,
    [Telephone] VARCHAR(18) NULL,
    [City] VARCHAR(100) NULL,
    [State] CHAR(2) NULL,
    [UserId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Professionals] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Professionals_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Reserves] (
    [Id] uniqueidentifier NOT NULL,
    [DateCreated] datetime2 NOT NULL,
    [DateUpdate] datetime2 NOT NULL,
    [PlaceId] uniqueidentifier NOT NULL,
    [ProfessionalId] uniqueidentifier NOT NULL,
    [Date] DateTime2 NOT NULL,
    [StartTime] BIGINT  NOT NULL,
    [Cost] Decimal(17,2)  NOT NULL,
    [Flag] Bit NOT NULL,
    CONSTRAINT [PK_Reserves] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Reserves_Locations_PlaceId] FOREIGN KEY ([PlaceId]) REFERENCES [Locations] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Reserves_Professionals_ProfessionalId] FOREIGN KEY ([ProfessionalId]) REFERENCES [Professionals] ([Id]) ON DELETE CASCADE
);

GO

CREATE UNIQUE INDEX [IX_Professionals_UserId] ON [Professionals] ([UserId]);

GO

CREATE INDEX [IX_Reserves_PlaceId] ON [Reserves] ([PlaceId]);

GO

CREATE INDEX [IX_Reserves_ProfessionalId] ON [Reserves] ([ProfessionalId]);

GO

CREATE UNIQUE INDEX [IX_Users_Email] ON [Users] ([Email]);

GO

CREATE UNIQUE INDEX [IX_Users_UserName] ON [Users] ([UserName]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20191118021436_Initial Database', N'2.2.6-servicing-10079');

GO

