import { caculService } from "./calcul.service";

  
  describe("Service countNumber", () => {
    let service: caculService;

    beforeEach(()=>{
        service = new caculService();
        console.log("creation du service");
    })

    it('should return the right value', ()=>{
      const res = service.countNumber(4,5);
      expect(res).toBe(9);
    });

    it('should return the right string', ()=>{
        const res = service.Replace("je test cette ligne", "e","o");
        expect(res).toBe("jo tost cotto ligno");
      });
  
});