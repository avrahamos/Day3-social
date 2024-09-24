import exp, { Router, Request, Response } from "express";

const router: Router = exp.Router();

router.post("/logout", async (req: Request, res: Response): Promise<void> => {
  try {
    res.json({
      erorr: false,
      messege: "TRUE out",
      data: undefined,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      messege: "erorout",
      data: null,
    });

    console.error(error);
  }
});

router.delete("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    res.json({
      erorr: false,
      messege: "TRUE",
      data: undefined,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      messege: "erororororororoororororororororororoorororororororo",
      data: null,
    });

    console.error(error);
  }
});

export default router;
