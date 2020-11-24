const models = require('../../models');
const colorConsole = require('../../lib/console');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.viewMentor = async (req, res) => {
    try {
        const mentorData = await models.authapi_user.findAll({
            attributes: ['username', 'school', 'facebook', 'kakao'],
            where: {
                [Op.and] : [
                    {[Op.or]: [
                        {
                            school: 
                            {
                                [Op.eq]: '대덕소프트웨어마이스터고등학교'
                            }
                        }, 
                        {
                            school: 
                            {
                                [Op.eq]: '대구소프트웨어고등학교'
                            }
                        }, 
                        {
                            school: 
                            {
                                [Op.eq]: '광주소프트웨어마이스터고등학교'
                            }
                        }
                    ]},
                    {[Op.or]: [
                        {
                            facebook: 
                            {
                                [Op.ne]: null
                            }
                        }, 
                        {
                            kakao: 
                            {
                                [Op.ne]: null
                            }
                        }, 
                    ]},
                ]
            },
                raw: true
            });
            return res.status(200).json({
                status: 200,
                message: '맨토 불러오기 성공',
                data: mentorData,
            });
        } catch (error) {
            const result = {
                status: 500,
                message: '맨토 불러오기 오류입니다.',
            };
            colorConsole.red(error);
            return res.status(500).json(result);
        }
    };