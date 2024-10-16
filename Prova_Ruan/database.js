import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgresql://vinicius:zz6_LkjZeKQGwMzPYquf1Q@vinicius-2465.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full', {
    dialect: 'postgres',
});

const conectar = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados realizada com sucesso!');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
};

export { sequelize, conectar };
