/**
 * CalculatorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    calculate: async function (req, res) {
        let num1=parseInt(req.body.num1);
        let num2=parseInt(req.body.num2);
        let operator=req.body.operation;
        CalculatorService.calculator(num1,num2,operator,(err,data,message)=>{
          if(err){
            return res.status(403).send({
              message: message,
              result:data
            });
          }else{
            return res.json({ status: 200, message: message, result: data });
          }
        });
      },

};

