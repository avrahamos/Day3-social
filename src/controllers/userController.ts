import exp, { Router, Request, Response } from "express";

const router: Router = exp.Router();

router.post("/register", async (req: Request, res: Response): Promise<void> => {
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

router.post("/follow", async (req: Request, res: Response): Promise<void> => {
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

router.get("/search", async (req: Request, res: Response): Promise<void> => {
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

router.get("/profile", async (req: Request, res: Response): Promise<void> => {
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

router.get("/following", async (req: Request, res: Response): Promise<void> => {
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
