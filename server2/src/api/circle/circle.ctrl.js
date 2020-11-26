const models = require('../../models');
const colorConsole = require('../../lib/console');
exports.viewCircle = async (req, res) => {
    try {
        const school_name = req.param('school_name');
        const circleData = await models.authapi_circle.findAll({
            where: {
                school : school_name,
            },
            raw: true
         });
            return res.status(200).json({
                status: 200,
                message: '동아리 불러오기 성공',
                data: circleData,
            });
    } catch (error) {
        const result = {
            status: 500,
            message: '동아리 불러오기 오류입니다.',
        };
        colorConsole.red(error);
        return res.status(500).json(result);
    }
};
exports.createCircle = async (req, res) => {
    const { circleName, property, introduce } = req.body;
    const school_name = req.param('school_name');
    const token = req.header('authorization');
    try {
        const user_token = await models.authtoken_token.findOne({
            key : token 
        });
        const id = user_token.user_id;
        const user_data = await models.authapi_user.findOne({
            id : id 
        });
        console.log(token);
        console.log(id);
        console.log(user_data);
        console.log(user_data.school);
        if(user_data.school == school_name) {
            await models.authapi_circle.create({
                circleName : circleName,
                school_name : school_name,
                property : property,
                introduce : introduce,
                authapiUserId : id
            });
            return res.status(200).json({
                status: 200,
                message: '동아리 생성 성공',
            });
        } else {
            return res.status(403).json({
                status: 403,
                message: '권한이 없습니다. 재학생만 사용할 수 있습니다.',
            });
        }
    } catch (error) {
        const result = {
            status: 500,
            message: '동아리 생성 오류입니다.',
        };
        colorConsole.red(error);
        return res.status(500).json(result);
    }
};