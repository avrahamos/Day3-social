import exp, { Router, Request, Response } from "express";

const router: Router = exp.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
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

router.post("/", async (req: Request, res: Response): Promise<void> => {
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

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
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

router.patch(
  "/like/:id",
  async (req: Request, res: Response): Promise<void> => {
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
  }
);

export default router;
